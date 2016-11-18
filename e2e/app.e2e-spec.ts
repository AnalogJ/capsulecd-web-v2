import { CapsulecdWebV2Page } from './app.po';

describe('capsulecd-web-v2 App', function() {
  let page: CapsulecdWebV2Page;

  beforeEach(() => {
    page = new CapsulecdWebV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
