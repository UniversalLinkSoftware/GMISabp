import { DOIGMISTemplatePage } from './app.po';

describe('DOIGMIS App', function() {
  let page: DOIGMISTemplatePage;

  beforeEach(() => {
    page = new DOIGMISTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
