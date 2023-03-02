import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss']
})
export class FaIconComponent {
  @Input() iconName: string = '';
  @Input() style: {[key:string]: string} = {}
}
