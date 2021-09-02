import {Portfolio} from '../models/portfolio';
import {Actions, ADD_PORTFOLIO} from '../actions/portfolio.actions';


export const portfolioFeatureKey = 'portfolio';

export const initialState: Portfolio = {
  title: 'Secure Erp',
  url: 'https://github.com/Artur-Le/ngrx-workshop',
  primaryLanguage: 'Typescript',
  author: 'Artur Leśniowski',
};


export function portfolioReducer(state: Portfolio[] = [initialState], action: Actions): Portfolio[] {
  switch (action.type) {
    case ADD_PORTFOLIO:
      return [...state, action.payload];
    default:
      return state;
  }
}



