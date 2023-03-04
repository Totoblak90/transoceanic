import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-badge',
  templateUrl: './image-badge.component.html',
  styleUrls: ['./image-badge.component.scss']
})
export class ImageBadgeComponent {

  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() name: string = '';

}
