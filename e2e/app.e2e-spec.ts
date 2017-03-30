import { YonikanPage } from './app.po';

describe('yonikan App', () => {
  let page: YonikanPage;

  beforeEach(() => {
    page = new YonikanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
