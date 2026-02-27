import {Component, signal} from '@angular/core';
@Component({
  selector: 'app-enter',
  templateUrl: 'animate.enter.component.html',
  styleUrls: ['animate.enter.component.css'],
})
export class Enter {
  isShown = signal(false);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}