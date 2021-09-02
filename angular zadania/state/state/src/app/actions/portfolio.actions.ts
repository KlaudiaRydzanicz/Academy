import { Action } from '@ngrx/store';
import {Portfolio} from '../models/portfolio';

export const ADD_PORTFOLIO = '[Portfolio] Add Portfolio';
export const DELETE_PORTFOLIO = '[Portfolio] Delete Portfolio';

export class AddPortfolio implements Action {
  readonly type = ADD_PORTFOLIO;

  constructor(public payload: Portfolio) {
  }
}


export class DeletePortfolio implements Action {
  readonly type = DELETE_PORTFOLIO;

  constructor(public payload: Portfolio) {
  }
}

export type Actions = AddPortfolio | DeletePortfolio;
