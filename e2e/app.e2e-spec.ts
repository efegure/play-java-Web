import { PlayJavaWebPage } from './app.po';

describe('play-java-web App', () => {
  let page: PlayJavaWebPage;

  beforeEach(() => {
    page = new PlayJavaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
