import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

const DEFAULT_IMAGE = 'http://localhost:4200/assets/max-bottinger-_yL3CxNwV4M-unsplash.jpg';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Type something');
  });

  it('should display default image', () => {
    page.navigateTo();
    expect(page.getImageSrc()).toEqual(DEFAULT_IMAGE);
  });

  it('should replace the default image after the gif search', () => {
    page.navigateTo();
    page.getInput().sendKeys('cat');
    expect(page.getTitleText()).toContain('cat');
    setTimeout(() => {
      expect(page.getImageSrc()).not.toEqual(DEFAULT_IMAGE);
    }, 3000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
