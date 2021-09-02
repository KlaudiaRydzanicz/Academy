import { Component, OnInit } from '@angular/core';
import {AppState} from "../../store/app.state";
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from "@angular/forms";
import { AddPortfolio } from 'src/app/actions/portfolio.actions';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      url: new FormControl(''),
      author: new FormControl('')
    });
  }

  addPortfolio(): void {
    const tempPortfolio = {
      title: 'test',
      url: 'test',
      primaryLanguage: 'JavaScript',
      author: 'Adrian'
    };
    this.store.dispatch(new AddPortfolio(tempPortfolio));
  }


}
