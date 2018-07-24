export interface ChatMessage {
    senderName: String;
    senderId: String;
    groupName: String;
    groupId: String;
    adminId: String;
    message: String;
    messageFromAdmin: Boolean;
    createdOn: Date;
}
