import {Portfolio} from '../models/portfolio';
import {Actions, ADD_PORTFOLIO} from '../actions/portfolio.actions';


export const portfolioFeatureKey = 'portfolio';


export const initialState: Portfolio = {
  title: 'Secure ERP',
  url: 'http://localhost:8080',
  primaryLanguage: 'typeScript',
  author: 'Klaudusia',
};

export function portfolioReducer(state: Portfolio[] = [initialState], action: Actions): Portfolio[] {
  switch (action.type) {
    case ADD_PORTFOLIO:
      return [...state, action.payload];
    default:
      return state;
  }
};


