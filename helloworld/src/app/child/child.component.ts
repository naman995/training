import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs: ['pdata'],
})
export class ChildComponent {
  pdata: any;
}
