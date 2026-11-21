import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Button';

  @Input() disabled: boolean = false;

  // 'button' by default so it never submits a surrounding <form> by accident
  @Input() type: 'button' | 'submit' = 'button';

  @Input() buttonClass: string = 'btn';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
