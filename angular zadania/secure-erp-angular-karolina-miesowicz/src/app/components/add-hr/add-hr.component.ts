import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Hr from '../../models/classes/hr';
import {HrService} from '../../services/hr.service';
import {HrComponent} from '../hr/hr.component';

@Component({
  selector: 'app-add-hr',
  templateUrl: './add-hr.component.html',
  styleUrls: ['./add-hr.component.scss']
})
export class AddHrComponent implements OnInit {

  addHrForm!: FormGroup;
  submitted = false;
  hr: Hr = new Hr();
  @Input() modal: any;

  constructor(private hrService: HrService, private hrComponent: HrComponent) { }

  ngOnInit(): void {
    this.addHrForm = new FormGroup( {
      name: new FormControl([Validators.required, Validators.minLength(2)]),
      birthday: new FormControl([Validators.required]),
      department: new FormControl([Validators.required]),
      clearance: new FormControl([Validators.required, Validators.min(1)]),
    });
  }

  saveNewHr(): void {
    this.hr.id = '_' + Math.random().toString(36).substr(2, 9);
    this.hrService.createNewHr(this.hr);
    this.submitted = true;
    this.modal.close('Save click');
    this.hrComponent.refreshList();
  }
}
