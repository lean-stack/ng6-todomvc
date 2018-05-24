import { AppPage } from './app.po';
import { by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('correct title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBe('todos');
  });
});
