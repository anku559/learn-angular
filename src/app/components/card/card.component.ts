import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() userName: string = '';
  @Input() content: string = '';
}
