import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // inputs: ['pdata'],
  outputs: ['childEvent'],
})
export class ChildComponent {
  // pdata: any;
  childEvent = new EventEmitter<any>();
  sendData(val: any) {
    console.log('Data from child: ', val);
    this.childEvent.emit(val);
  }
}
