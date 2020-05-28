import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ]
})
export class CalculatorComponent {

  constructor(private readonly calculatorService: CalculatorService) {}

  public num1: number;
  public num2: number;
  public result: number;
  public resultHeader: string;

  add() {
    this.result = this.calculatorService.add(this.num1, this.num2);
    this.resultHeader = this.num1 + ' + ' + this.num2;
  }

  subtract() {
    this.result = this.calculatorService.subtract(this.num1, this.num2);
    this.resultHeader = this.num1 + ' - ' + this.num2;
  }

  multiply() {
    this.result = this.calculatorService.multiply(this.num1, this.num2);
    this.resultHeader = this.num1 + ' x ' + this.num2;
  }

  divide() {
    this.result = this.calculatorService.divide(this.num1, this.num2);
    this.resultHeader = this.num1 + ' / ' + this.num2;
  }

}
