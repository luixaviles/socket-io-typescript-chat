import { AngularChatPage } from './app.po';

describe('angular-chat App', function() {
  let page: AngularChatPage;

  beforeEach(() => {
    page = new AngularChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
