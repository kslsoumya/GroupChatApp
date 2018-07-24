import { GroupChatModule } from './group-chat.module';

describe('GroupChatModule', () => {
  let groupChatModule: GroupChatModule;

  beforeEach(() => {
    groupChatModule = new GroupChatModule();
  });

  it('should create an instance', () => {
    expect(groupChatModule).toBeTruthy();
  });
});
