import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatButtonModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator-app';
  display = '0';
  temizle: string | null = null;
  firstValue: number | null = null;
  action: string | null = null;
  sayi(value: number) {
    if (this.display === '0') {
      this.display = value.toString();
    } else {
      this.display = `${this.display}${value}`;
    }
  }
  oper(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }
  calculate() {
    let defaultValue: number = 0;
    const a = this.firstValue;
    const b = parseFloat(this.display);
    let result = 0;
    if (a) {
      if (this.action === 'x') {
        result = a * b;
      }
      else if (this.action === '÷') {
        result = a / b;
      }
      else if (this.action === '+') {
        result = a + b;
      }
      else if (this.action === '-') {
        result = a - b;
      }
      this.firstValue = result;
      this.display = result?.toString();
    }
  }
  sil(temizle: string) {
    this.firstValue = parseFloat(this.display);
    this.temizle = temizle;
    this.display = ' ';
  }
}

