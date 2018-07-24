import { Component, OnInit, ViewChild } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../../http.service';
import { SocketService } from '../../socket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChatMessage } from './chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // @ViewChild('scrollMe')

  public shallCreate = false;
  public userId: any;
  public userName: any;
  public userStatus: any;
  public groupTitle: any;
  public groupStatus: any;
  public groupId: any;
  public groupsList = [];
  public activeGroups = [];

  public group: {};
  public isAdmin = false;
  public isGroupSelected = false;
  public isEdit = false;
  public isMember = false;

  public scrollToTopChat = false;
  public loadingPreviousChat = false;
  public messageText: any;
  public pageValue = 0;
  public isTyping = false;
  public typingNotification: String;

  public noGroup = false;

  constructor(private toastr: ToastrService, private httpService: HttpService, private _route: Router,
    private cookieService: CookieService, private socketService: SocketService) {
    this.userId = this.cookieService.get('userId');
    this.userName = this.cookieService.get('userName');
    this.userStatus = this.cookieService.get('userStatus');
  }

  ngOnInit() {

    this.getGroups();
    this.initialActiveGroups();
    this.getNotification();
    this.updateGroupsList();
    this.receiveMessage();
    this.receiveTyping();
    this.receieveStopTyping();
  }

  public getIndex = (id, participant) => {
    let index;
    if (!participant) {
      index = this.groupsList.map((group) => {
        return group.groupId;
      }).indexOf(id);
    } else {
      index = this.activeGroups.map((group) => {
        return group.groupId;
      }).indexOf(id);
    }
    return index;
  }

  public newGroup = () => {
    this.shallCreate = true;
    this.isEdit = false;
    this.groupTitle = '';
    this.groupStatus = '';
  }

  public createGroup = () => {
    const newGroup = {
      title: this.groupTitle,
      status: this.groupStatus,
      name: this.userName,
      id: this.userId
    };
    this.httpService.groupCreation(newGroup).subscribe(
      (resp) => {
        console.log(resp);
        if (resp['status'] === 200) {
          this.toastr.success(resp['message']);
          this.groupsList.push(resp['data']);
          this.shallCreate = false;
          console.log(this.groupsList);
        }
      });
  }

  public groupSelectedToChat = (group) => {
    this.group = group;
    this.shallCreate = false;
    this.isGroupSelected = true;
    this.isEdit = false;
    if (this.userId === group.adminId) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.pageValue = 0;
    console.log(this.group);
  }


  public toggleGroupActive = (group) => {
    let data;
    const groupDetails = {
      groupId: group.groupId,
      groupName: group.groupName,
      adminId: group.adminId,
      userName: this.userName
    };
    const index = this.getIndex(group.groupId, false);
    this.groupsList[index].isActive = !this.groupsList[index].isActive;
    if (this.groupsList[index].isActive) {
      this.socketService.setGroupActive(groupDetails);
      this.socketService.joinGroup(groupDetails);
      data = {
        isActive: true
      };
    } else {
      data = {
        isActive: false
      };
      this.socketService.setGroupInActive(groupDetails);
      this.socketService.leaveGroup(groupDetails);
    }
    this.httpService.changeGroupDetail(group.groupId, data).subscribe(
      (resp) => {
        console.log(resp['data']);
      },
      (err) => {
        console.log(err);
      });
  }

  public initialActiveGroups = () => {
    this.httpService.getActiveGroupsService(this.userId).subscribe(
      (resp) => {
        if (resp['data'] !== null && resp['status'] === 200) {
          console.log(resp['data'] + 'Active groups');
          this.activeGroups = this.activeGroups.concat(resp['data']);
        } else {
          this.toastr.warning(resp['message']);
        }
      });
  }

  public updateGroupsList = () => {
    this.socketService.getActievGroups().subscribe(
      (resp) => {
        console.log(resp);
        this.activeGroups = [];
        this.activeGroups = this.activeGroups.concat(resp);
      });
  }

  public deleteSelectedGroup = (id, name) => {
    const index = this.getIndex(id, false);
    this.httpService.deleteGroup(id).subscribe(
      (resp) => {
        if (resp['status'] === 200) {
          this.toastr.success(resp['message']);
          this.groupsList.splice(index, 1);
        }
      });
  }

  public getGroups = () => {
    this.httpService.getGroups(this.userId).subscribe(
      (data) => {
        if (data['data'] !== null) {
          this.groupsList = this.groupsList.concat(data['data']);
          this.groupsList.forEach((group) => {
            if (group.isActive) {
              this.socketService.joinGroup(group);
            }
          });
          console.log(this.groupsList);
        }
      });
  }

  public editGroup = (editGroup) => {
    this.isGroupSelected = false;
    this.shallCreate = false;
    this.isEdit = true;
    this.groupTitle = editGroup.groupName;
    this.groupStatus = editGroup.status;
    this.groupId = editGroup.groupId;
  }

  public editGroupDetails = () => {
    const index = this.getIndex(this.groupId, false);
    const newGroup = {
      groupName: this.groupTitle,
      status: this.groupStatus
    };
    this.httpService.changeGroupDetail(this.groupId, newGroup).subscribe(
      (resp) => {
        if (resp['status'] === 200) {
          this.groupsList.splice(index, 1);
          this.toastr.success(resp['message']);
          this.httpService.getSingleGroup(this.groupId).subscribe(
            (singleGroup) => {
              if (singleGroup['status'] === 200) {
                this.groupsList.push(singleGroup['data']);
              }
            });
        }
      });
  }

  public getNotification = () => {
    this.socketService.notification().subscribe(
      (data) => {
        this.toastr.success(data);
      });
  }

  public toggleJoin = (id) => {
    const index = this.getIndex(id, true);
    this.activeGroups[index].isMember = !this.activeGroups[index].isMember;
    const data = {
      groupName: this.activeGroups[index].groupName,
      userName: this.userName
    };
    if (this.activeGroups[index].isMember) {
      this.socketService.joinGroup(data);
    } else {
      this.socketService.leaveGroup(data);
    }
  }


  public sendMessageUsingKeypress: any = (event, group) => {
    if (event.keyCode === 13) {
      console.log(event);
      this.sendMessage(group);
    }
  }

  public sendMessage: any = (group) => {
    if (this.messageText) {
      const msg: ChatMessage = {
        senderName: this.userName,
        senderId: this.userId,
        groupName: group.groupName,
        groupId: group.groupId,
        adminId: group.adminId,
        messageFromAdmin: (this.userId === group.adminId) ? true : false,
        message: this.messageText,
        createdOn: new Date()
      };
      this.socketService.sendMessageEvent(msg);
      this.pushToChatWindow(msg);
    } else {
      this.toastr.warning('Message cannot be empty');
    }
  }

  public receiveMessage = () => {
    this.socketService.getMessage().subscribe(
      (data) => {
        if (this.group !== undefined && this.group['groupId'] !== data.groupId) {
          this.toastr.info(`Message from ${data.groupName}`);
        }
        this.pushToChatWindow(data);
      });
  }

  public pushToChatWindow = (data) => {
    this.messageText = '';
    let inActiveGroupList = true;
    let index = this.getIndex(data.groupId, true);
    if (index === -1) {
      inActiveGroupList = false;
      index = this.getIndex(data.groupId, false);
    }
    if (data.adminId !== data.senderId) {
      data.messageFromAdmin = false;
    } else {
      data.messageFromAdmin = true;
    }
    inActiveGroupList ? this.activeGroups[index].messageList.push(data) : this.groupsList[index].messageList.push(data);
    if (this.group === undefined) {
      this.groupSelectedToChat(inActiveGroupList ? this.activeGroups[index] : this.groupsList[index]);
      this.scrollToTopChat = false;
    }
  }

  public loadEarlierPageOfChats: any = (group) => {
    this.loadingPreviousChat = true;
    this.pageValue++;
    this.scrollToTopChat = true;
    this.loadPreviousChatinGroup(group);
  }

  public loadPreviousChatinGroup: any = (loadGroup) => {
    let inActiveGroupList = true;
    let  previousData;
    let index = this.getIndex(loadGroup.groupId, true);
    if (index === -1) {
      inActiveGroupList = false;
      index = this.getIndex(loadGroup.groupId, false);
    }
    if (inActiveGroupList) {
       previousData = this.activeGroups[index].messageList.length > 0 ? this.activeGroups[index].messageList.slice() : [];
    } else {
       previousData = this.groupsList[index].messageList.length > 0 ? this.groupsList[index].messageList.slice() : [];
    }
    this.httpService.getPreviousChat(loadGroup.groupId, this.pageValue * 10).
      subscribe(resp => {
        if (resp['status'] === 200) {
          console.log(resp);
          inActiveGroupList ? this.activeGroups[index].messageList = resp['data'].concat(previousData) :
          this.groupsList[index].messageList = resp['data'].concat(previousData);
        } else {
          this.toastr.warning('No messages available');
        }
        this.loadingPreviousChat = false;
      }, err => {
        this.toastr.error('Some Error Occured');
      });
  }

  public startTyping = (name) => {
    const data = {
      userName: this.userName,
      groupName: name
    };
    this.socketService.typing(data);
  }

  public receiveTyping = () => {
    this.socketService.userTyping().subscribe(
      (data) => {
        if (this.group['groupName'] !== undefined && this.group['groupName'] === data.groupName) {
        this.isTyping = true;
        this.typingNotification = data.msg;
        }
      });
  }

  public stopTyping = (name) => {
    const data = {
      groupName: name,
      userName: this.userName
    };
    this.socketService.userStoppedTyping(data);
  }

  public receieveStopTyping = () => {
    this.socketService.stoppedTyping().subscribe(
      (data) => {
        this.typingNotification = '';
        this.isTyping = false;
      });
  }


  public logOut: any = () => {
    this.httpService.logOutFunction()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.cookieService.deleteAll();
          this.socketService.exitSocket();
          this._route.navigate(['/']);
        } else {
          this.toastr.error(resp.message);
        }
      },
        (err) => {
          this.toastr.error(err.message);
        });
  }

}
