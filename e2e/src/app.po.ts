import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.search-container label')).getText() as Promise<string>;
  }

  getImageSrc() {
    return element(by.css('.container img')).getAttribute('src') as Promise<string>;
  }

  getInput() {
    return element(by.css('.search-container input'));
  }
}
