import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  option: number = 0;
  res: number = 0;

  onClickCalc(){
    if(this.option==1){
      this.res = this.num1 + this.num2;
    }
    else{
      if(this.option==2){
        this.res = this.num1 - this.num2;
      }
      else {
        if(this.option==3){
          this.res = this.num1 / this.num2;
        }
        else {
          if(this.option==4){
            this.res = this.num1 * this.num2;
          }
        }
      }
    }
  }
}
