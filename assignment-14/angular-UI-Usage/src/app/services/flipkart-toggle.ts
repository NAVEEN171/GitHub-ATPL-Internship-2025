import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlipkartToggle {
  private iframeShow = new BehaviorSubject<boolean>(false);

  toggleFlipKart() {
    this.iframeShow.next(!this.iframeShow.value);
  }

  getFlipKartDetails() {
    return this.iframeShow;
  }
}
