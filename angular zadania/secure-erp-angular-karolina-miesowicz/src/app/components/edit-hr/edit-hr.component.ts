import {Component, Input, OnInit} from '@angular/core';
import Hr from '../../models/classes/hr';
import {HrComponent} from '../hr/hr.component';
import {HrService} from '../../services/hr.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-hr',
  templateUrl: './edit-hr.component.html',
  styleUrls: ['./edit-hr.component.scss']
})
export class EditHrComponent implements OnInit {

  @Input() modal: any;
  selectedHr: Hr = null;
  editHrForm!: FormGroup;
  updated = false;

  constructor(private hrComponent: HrComponent, private hrService: HrService) {
  }

  ngOnInit(): void {
    this.editHrForm = new FormGroup( {
      name: new FormControl( '', [Validators.required, Validators.minLength(2)]),
      birthday: new FormControl(null, [Validators.required]),
      department: new FormControl('', [Validators.required]),
      clearance: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
    this.selectedHr = this.hrComponent.selectedHr;
    console.log(this.selectedHr.name);
  }

  updateHr(): void {
    console.log(this.editHrForm.value, 'vals');
    console.log(this.editHrForm.valid, 'valid');
    const data = {
      id: this.selectedHr.id,
      name: this.selectedHr.name,
      birthday: this.selectedHr.birthday,
      department: this.selectedHr.department,
      clearance: this.selectedHr.clearance,
    };

    this.editHrForm.patchValue(
      data
    );
    this.hrService.updateHr(this.selectedHr.id, data);
    this.modal.close();
    this.hrComponent.refreshList();
  }

}
