import { TypescriptChatClientPage } from './app.po';

describe('typescript-chat-client App', () => {
  let page: TypescriptChatClientPage;

  beforeEach(() => {
    page = new TypescriptChatClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tcc!!');
  });
});
