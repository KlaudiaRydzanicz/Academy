import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Portfolio} from '../../models/portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolios$: Observable<Portfolio[]>;

  constructor(private store: Store<AppState>) {
    this.portfolios$ = store.select('portfolios');
  }

  ngOnInit(): void {
  }

}
