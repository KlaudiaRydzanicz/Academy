import {Component, OnInit} from '@angular/core';
import {HrService} from '../../services/hr.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import Hr from '../../models/classes/hr';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {
  hr: Hr[];
  closeResult = '';
  private orderedByDates: Hr[];
  countDepartment = {};
  myDate: Date;
  clearanceLevel: number;
  nextBirthdaysHr: Hr[] = [];
  clearanceNumber: number;
  selectedHr: Hr;

  constructor(private hrService: HrService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  countAge(): void {
    this.hr.forEach((humanR: Hr) => {
      const timeDiff = Math.abs(Date.now() - new Date(humanR.birthday).getTime());
      humanR.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    });
  }

  countAverage(): number {
    let ageSum = 0;
    this.hr.forEach((humanR: Hr) => {
      ageSum += humanR.age;
      return ageSum;
    });
    return Math.round(ageSum / this.hr.length * 10) / 10;
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getYoungest(): string {
    return this.orderedByDates[0].name;
  }

  getOldest(): string {
    return this.orderedByDates[this.orderedByDates.length - 1].name;
  }

  sortDates(): void {
    this.hrService.getAllHR().pipe(
      map(humanR => humanR.sort((a, b) => new Date(b.birthday).getTime() - new Date(a.birthday).getTime()))
    )
      .subscribe(humanR => this.orderedByDates = humanR);
  }

  countPerDepartment(): void {
    this.countDepartment = {};
    const departments: string[] = [];
    this.hr.forEach((humanR: Hr) => {
      departments.push(humanR.department);
    });
    departments.forEach((i) => {
      this.countDepartment[i] = (this.countDepartment[i] || 0) + 1;
    });
  }

  showNextBirthday(): void {
    this.nextBirthdaysHr = [];
    this.hr.forEach((humanR: Hr) => {
      const selectedMonth = new Date(this.myDate).getMonth();
      const birthdayMonth = new Date(humanR.birthday).getMonth();
      const selectedDay = new Date(this.myDate).getDate();
      const birthdayDay = new Date(humanR.birthday).getDate();
      const newSelectedDate = new Date(1970, selectedMonth, selectedDay);
      const newBirthdayDate = new Date(1970, birthdayMonth, birthdayDay);
      // tslint:disable-next-line:max-line-length
      newBirthdayDate.getTime() - newSelectedDate.getTime() >= 0 && newBirthdayDate.getTime() - newSelectedDate.getTime() <= 12096e5 ? this.nextBirthdaysHr.push(humanR) : console.log();
    });
  }

  countClearanceNumber(): void {
    this.clearanceNumber = 0;
    this.hr.forEach((humanR: Hr) => {
      humanR.clearance >= this.clearanceLevel ? this.clearanceNumber += 1 : console.log();
    });
  }

  getAll(): void {
    this.hrService.getAllHR().subscribe((humanR: Hr[]) => {
      this.hr = humanR;
      this.countAge();
      this.sortDates();
      this.countPerDepartment();
    });
  }

  deleteEmployee(id: string): void {
    this.hrService.deleteHr(id);
    this.refreshList();
  }

  deleteFunction(modal: any): void {
    this.deleteEmployee(this.selectedHr.id);
    modal.close('Save click');
    this.refreshList();
  }

  refreshList(): void {
    this.selectedHr = null;
    this.getAll();
  }
}
