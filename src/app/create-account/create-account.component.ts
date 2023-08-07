import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  username: string = '';
  supplierID: string = '';
  contactNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;
  officeNumber: string ='';
  officeAddress: string ='';
  createAccount() {
    
  }

  selectedOption: string = '';
  selectedOptionArray: any[] = [];

  updateLabel() {
    if (this.selectedOption === 'Supplier') {
      this.selectedOptionArray = ['Supplier ID'];
    } else if (this.selectedOption === 'Trader') {
      this.selectedOptionArray = ['Trader ID'];
    } else {
      this.selectedOptionArray = [];
    }
  }
}
