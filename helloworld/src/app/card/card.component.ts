import { Component, HostListener } from '@angular/core';
import { Demo2Component } from '../demo2/demo2.component';

@Component({
  selector: '.app-card',
  standalone: true,
  imports: [Demo2Component],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @HostListener('click', ['$event'])
  show() {
    console.log('CardComponent clicked');
  }
}
