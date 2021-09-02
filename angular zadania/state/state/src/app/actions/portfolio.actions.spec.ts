import * as fromPortfolio from './portfolio.actions';

describe('loadPortfolios', () => {
  it('should return an action', () => {
    expect(fromPortfolio.loadPortfolios().type).toBe('[Portfolio] Load Portfolios');
  });
});
