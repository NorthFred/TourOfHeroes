import { TourofheroesPage } from './app.po';

describe('tourofheroes App', () => {
  let page: TourofheroesPage;

  beforeEach(() => {
    page = new TourofheroesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
