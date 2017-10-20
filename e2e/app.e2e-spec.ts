import { GloggerPage } from './app.po';

describe('glogger App', () => {
  let page: GloggerPage;

  beforeEach(() => {
    page = new GloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
