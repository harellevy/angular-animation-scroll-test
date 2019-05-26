import { Component, ElementRef, Input } from '@angular/core';
import { IScrollObj } from '../../animation-controller/animation-controller.types';

@Component({
  selector: 'app-middle-section',
  templateUrl: 'middle-section.component.html',
  styleUrls: ['../shared.scss',
    'middle-section.component.scss']
})
export class MiddleSectionComponent {
  _scrollPosition: IScrollObj;
  get scrollPosition(){
    this._scrollPosition.sectionDistance = this._scrollPosition.topDistance - this.elRef.nativeElement.offsetTop;
    return this._scrollPosition;
  }
  @Input() set scrollPosition(value: IScrollObj){
    // value.topDistance = value.topDistance - this.elRef.nativeElement.offsetTop;
    this._scrollPosition = value;
  };
  @Input() windowHeight: number;
  constructor(private elRef: ElementRef
              ) {

  }
}
