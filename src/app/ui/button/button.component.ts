import { Component, Input } from '@angular/core';

@Component({
  selector: 'transoceanic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = ''
  @Input() type: 'button' | 'submit' = 'button'
  @Input() disabled = false;
}
