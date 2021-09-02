import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {SalesService} from '../../sales.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IAssumption} from '../../interfaces/assumption';

@Component({
  selector: 'app-assumption-by',
  templateUrl: './assumption-by.component.html',
  styleUrls: ['./assumption-by.component.scss']
})
export class AssumptionByComponent implements OnInit {
  assumptionTypes: IAssumption[] = [];
  form: FormGroup = new FormGroup(
    {
      dateFrom: new FormControl(null, [Validators.required]),
      dateTo: new FormControl(null, [Validators.required]),
      assumptionType: new FormControl(0, [Validators.required])
    }
  );

  result: { assumption: string, result: number } | null = null;

  constructor(public bsModalRef: BsModalRef, private salesService: SalesService) {
    this.assumptionTypes = this.salesService.getSalesAssumptionTypes();
  }

  ngOnInit(): void {
  }

  close(): void {
    this.bsModalRef.hide();
  }

  countAssumption(): void {
    this.result = null;
    this.salesService.getSalesBetweenDates(
      new Date(this.form.value.dateFrom), new Date(this.form.value.dateTo)
    ).subscribe((sales) => {
      const assumptionIndex = parseInt(this.form.value.assumptionType, 0);
      let result = 0;
      switch (assumptionIndex) {
        case 0:
          result = sales.length;
          break;
        case 1:
          for (const sale of sales) {
            result += sale.price;
          }
          break;
      }
      this.result = {assumption: this.assumptionTypes[assumptionIndex].name, result};
    });
  }
}
