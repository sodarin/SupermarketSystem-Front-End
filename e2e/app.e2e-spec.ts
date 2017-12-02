import { SupermarketManagementSystemPage } from './app.po';

describe('supermarket-management-system App', () => {
  let page: SupermarketManagementSystemPage;

  beforeEach(() => {
    page = new SupermarketManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
