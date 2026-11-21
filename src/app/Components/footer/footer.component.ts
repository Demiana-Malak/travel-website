import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  subscribed = false;

  subscribe(event: Event, input: HTMLInputElement) {
    event.preventDefault(); // a plain form submit would reload the whole page
    if (!input.value.trim() || !input.checkValidity()) {
      input.reportValidity();
      return;
    }
    this.subscribed = true;
    input.value = '';
    setTimeout(() => (this.subscribed = false), 4000);
  }
}
