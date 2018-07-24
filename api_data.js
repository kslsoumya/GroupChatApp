define({ "api": [
  {
    "group": "Chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/group_chat/:id/:skip",
    "title": "Get groupChat.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the group. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of messages. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"All Group chats Listed\",\n     \"status\": 200,\n     \"data\": [\n                 {\n                     \"senderName\": \"werwer\",\n                     \"senderId\": \"C8OnWW9ze\",\n                     \"message\": \"hiiiiiii\",\n                     \"groupId\": \"U7BOF7w_4\",\n                     \"groupName\": \"women \",\n                     \"seen\": false,\n                     \"chatId\": \"RpIjsk4oV\",\n                     \"createdOn\": \"2018-07-23T13:19:11.117Z\",\n                     \"modifiedOn\": \"2018-07-23T13:19:13.131Z\"\n                 },\n                 {\n                     \"senderName\": \"wefwfwe\",\n                     \"senderId\": \"C8OnWW9ze\",\n                     \"message\": \"hiiii\",\n                     \"groupId\": \"U7BOF7w_4\",\n                     \"groupName\": \"women \",\n                     \"seen\": false,\n                     \"chatId\": \"9gcATJ9AV\",\n                     \"createdOn\": \"2018-07-23T15:37:49.504Z\",\n                     \"modifiedOn\": \"2018-07-23T15:37:51.656Z\"\n                 },\n                 {\n                     \"senderName\": \"wefwefewf\",\n                     \"senderId\": \"C8OnWW9ze\",\n                     \"message\": \"hiiiii\",\n                     \"groupId\": \"U7BOF7w_4\",\n                     \"groupName\": \"women \",\n                     \"seen\": false,\n                     \"chatId\": \"epJ3AXtCn\",\n                     \"createdOn\": \"2018-07-23T17:03:14.322Z\",\n                     \"modifiedOn\": \"2018-07-23T17:03:16.329Z\"\n                 }\n             ]\n }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/Chat.js",
    "groupTitle": "Chat",
    "name": "GetApiV1ChatGetGroup_chatIdSkip"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/group/get/active/:userId",
    "title": "Get Active groups.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"error\": false,\n    \"message\": \"Groups Found Succesfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"groupName\": \"PSU\",\n            \"adminName\": \"asafsdfd\",\n            \"adminId\": \"AAwW5AL4y\",\n            \"isActive\": true,\n            \"isMember\": false,\n            \"messageList\": [],\n            \"status\": \"hardwork\",\n            \"_id\": \"5b55a5fff3cdf916dcdeddd7\",\n            \"groupId\": \"XolysrhNa\",\n            \"createdOn\": \"2018-07-23T09:55:11.000Z\",\n            \"modifiedOn\": \"2018-07-23T09:55:11.197Z\",\n            \"__v\": 0\n        },\n        {\n            \"groupName\": \"Apple\",\n            \"adminName\": \"qwrwerwe\",\n            \"adminId\": \"C8OnWW9ze\",\n            \"isActive\": true,\n            \"isMember\": false,\n            \"messageList\": [],\n            \"status\": \"iphone is my love\",\n            \"_id\": \"5b55c582d0f57d2bf4540236\",\n            \"groupId\": \"UREK5dTeY\",\n            \"createdOn\": \"2018-07-23T12:09:38.000Z\",\n            \"modifiedOn\": \"2018-07-23T12:09:38.505Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "GetApiV1GroupGetActiveUserid"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/group/get/:userId",
    "title": "Get Groups.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Groups retrieved\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"groupName\": \"PSU\",\n            \"adminName\": \"abc\",\n            \"adminId\": \"DSfoJbEk8\",\n            \"isActive\": false,\n            \"isMember\": false,\n            \"messageList\": [],\n            \"status\": \"I am great\",\n            \"groupId\": \"vnlrWDAWb\",\n            \"createdOn\": \"2018-07-24T13:38:27.000Z\",\n            \"modifiedOn\": \"2018-07-24T13:38:27.271Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "GetApiV1GroupGetUserid"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/group/get_group/:groupId",
    "title": "Get single group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the group. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Group details Found Succesfully\",\n    \"status\": 200,\n    \"data\": {\n                \"groupName\": \"PSU\",\n                \"adminName\": \"abc\",\n                \"adminId\": \"DSfoJbEk8\",\n                \"isActive\": false,\n                \"isMember\": false,\n                \"messageList\": [],\n                \"status\": \"I am great\",\n                \"groupId\": \"vnlrWDAWb\",\n                \"createdOn\": \"2018-07-24T13:38:27.000Z\",\n                \"modifiedOn\": \"2018-07-24T13:38:27.271Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "GetApiV1GroupGet_groupGroupid"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/create",
    "title": "Create Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status Line for the group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Created Group successfully\",\n        \"status\": 200,\n        \"data\": {\n                    \"groupName\": \"PSU\",\n                    \"adminName\": \"abc\",\n                    \"adminId\": \"DSfoJbEk8\",\n                    \"isActive\": false,\n                    \"isMember\": false,\n                    \"messageList\": [],\n                    \"status\": \"I am great\"\n                    \"groupId\": \"vnlrWDAWb\",\n                    \"createdOn\": \"2018-07-24T13:38:27.000Z\",\n                    \"modifiedOn\": \"2018-07-24T13:38:27.271Z\"\n                }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "PostApiV1GroupCreate"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/delete/:groupId",
    "title": "Delete Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the group. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Group Deleted Succesfully\",\n    \"status\": 200,\n    \"data\": {\n            \"n\": 1,\n            \"ok\": 1\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "PostApiV1GroupDeleteGroupid"
  },
  {
    "group": "Groups",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/group/edit/:groupId",
    "title": "Edit group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the group. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupdetails",
            "description": "<p>details of the group to be changed. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or queryparams) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Group details Found Succesfully\",\n    \"status\": 200,\n   data:\n        {\n            n: 1, \n            nModified: 1, ok: 1\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "Groups",
    "name": "PutApiV1GroupEditGroupid"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"wqerwrwe\",\n        \"userDetails\": {\n        \"userId\": \"AAwW5AL4y\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"email\": \"someone@mail.com\",\n        \"mobile\": 2234435524,\n        \"status\":\"Makes Impossible Possible\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to Logout.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"n\": 0,\n                \"ok\": 1\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status for chat Account. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"userId\": \"DSfoJbEk8\",\n                \"firstName\": \"xyz\",\n                \"lastName\": \"abccba\",\n                \"email\": \"abc@gmail.com\",\n                \"status\": \"I am great\",\n                \"mobile\": 98078656,\n                \"createdOn\": \"2018-07-24T13:32:17.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/forgotPwd",
    "title": "Password Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Password Reset Successful\",\n   \"status\": 200,\n    \"data\": {\n               \"userId\": \"AAwW5AL4y\",\n               \"firstName\": \"vbbbbbb\",\n               \"lastName\": \"aaaaaa\",\n               \"email\": \"xxxxxx@gmail.com\",\n               \"status\": \"Makes Impossible Possible!\",\n               \"mobile\": 1234234325,\n               \"createdOn\": \"2018-07-23T04:12:35.000Z\"\n           }\n }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersForgotpwd"
  }
] });
