import { AgHelloWorldPage } from './app.po';

describe('ag-hello-world App', () => {
  let page: AgHelloWorldPage;

  beforeEach(() => {
    page = new AgHelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
