import {Component, signal} from '@angular/core';
@Component({
  selector: 'app-leave',
  templateUrl: 'animate.leave.component.html',
  styleUrls: ['animate.leave.component.css'],
})
export class Leave {
  isShown = signal(false);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}