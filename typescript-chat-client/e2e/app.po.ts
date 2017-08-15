import { browser, by, element } from 'protractor';

export class TypescriptChatClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tcc-root h1')).getText();
  }
}
