import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from 'src/app/directives/input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterContentInit {

  @ContentChild(InputRefDirective) input: InputRefDirective | undefined;

  @Input() icon: string = '';
  @Input() iconStyle: {[key:string]: string} = {}

  ngAfterContentInit(): void {
    if (!this.input) console.error('Hay que pasar un input si o si al componente fa-input')
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input?.focus || false;
  }
}
