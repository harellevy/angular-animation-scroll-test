import { Component, Input } from '@angular/core';
import { IScrollObj } from '../../animation-controller/animation-controller.types';

@Component({
  selector: 'app-image-section',
  templateUrl: 'image-squares.component.html',
  styleUrls: ['image-squares.component.scss']
})
export class ImageSquaresComponent {
  @Input() scrollPosition: IScrollObj;
  scrollGap: number = 30;
  scrollDuration: number = 280;
  badgeScrollDuration: number = 50;
  imgArr = new Array(9);
  // badge map - index in array to threshold and img map
  badgeMap = {
    0: {
      threshold: 0,
      img: '../../../assets/images/badges/badge-1.png'
    },
    5: {
      threshold: 5,
      img: '../../../assets/images/badges/badge-2.png'
    },
    6: {
      threshold: 10,
      img: '../../../assets/images/badges/badge-3.png'
    }
  };
  constructor() {

  }
}
