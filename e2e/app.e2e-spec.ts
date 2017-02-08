import { NgvikingsMaterialTestPage } from './app.po';

describe('ngvikings-material-test App', function() {
  let page: NgvikingsMaterialTestPage;

  beforeEach(() => {
    page = new NgvikingsMaterialTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
