import { Component, ElementRef, Input } from '@angular/core';
import { IScrollObj } from '../../animation-controller/animation-controller.types';

@Component({
  selector: 'app-top-section',
  templateUrl: 'top-section.component.html',
  styleUrls: ['../shared.scss',
    'top-section.component.scss']
})
export class TopSectionComponent {
  _scrollPosition: IScrollObj;
  sectionImage: string = "url('../../../assets/images/section-1.png')";
  get scrollPosition(){
    this._scrollPosition.sectionDistance = this._scrollPosition.topDistance - this.elRef.nativeElement.offsetTop;
    return this._scrollPosition;
  }
  @Input() windowHeight: number;
  @Input() set scrollPosition(value: IScrollObj){
    // value.topDistance = value.topDistance - this.elRef.nativeElement.offsetTop;
    this._scrollPosition = value;
  };
  constructor(private elRef: ElementRef) {
  }
}
