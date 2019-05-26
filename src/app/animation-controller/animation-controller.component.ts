import { AfterViewInit, Component, Input} from '@angular/core';
import { CssMeatures, IScrollObj } from './animation-controller.types';

@Component({
  selector: 'app-anim-cont',
  templateUrl: 'animation-controller.component.html',
  styleUrls: ['animation-controller.component.scss']
})
export class AnimComponent implements AfterViewInit{
  cssStyle: any = {scale: 0};
  @Input() set scrollPosition(value: IScrollObj) {
    if (value) {
      this.scrollHandler(value);
    }
  };
  @Input() propertyType: string = 'transform';
  @Input() animationType: string = 'scale';
  @Input() minValue: number = 0;
  @Input() maxValue: number = 1;
  @Input() initValue: number = 0;
  @Input() valueEnding: CssMeatures = '';
  @Input() scrollThreshold: number = 50;
  @Input() scrollDistance: number = 300;
  constructor() {
    console.log('have anim-cont wrapper');
  }

  ngAfterViewInit(): void {
    this.cssStyle = this.scrollHandler(this.initValue);
  }

  scrollHandler(value){
    let distance = typeof value.sectionDistance === 'number' ? value.sectionDistance : value.topDistance;
    if (distance < this.scrollThreshold) {
      window.requestAnimationFrame(() => {
      this.cssStyle = this._makeNewCssPropertyBasedOn(this.propertyType, this.animationType, this.initValue);
      });
    } else if (
      distance >= this.scrollThreshold &&
      distance <= this.scrollThreshold + this.scrollDistance
    ) {
      let animationDistance = this.maxValue - this.minValue;
      let scrollPositionRelatedToSlot = distance - this.scrollThreshold;
      let animationValue = ((scrollPositionRelatedToSlot / (this.scrollDistance)) * (animationDistance)) + this.minValue;
      window.requestAnimationFrame(() => {
        this.cssStyle = this._makeNewCssPropertyBasedOn(this.propertyType, this.animationType, animationValue);
      });
    }else {
      window.requestAnimationFrame(() => {
        this.cssStyle = this._makeNewCssPropertyBasedOn(this.propertyType, this.animationType, this.maxValue);
      });
    }
    return this.cssStyle;
  }

  private _makeNewCssPropertyBasedOn(property, valueType, value) {
    switch (property) {
      case 'transform':
        return this._handleTransformProperties(valueType, value);
      case 'opacity':
        return {opacity: value};
      default :
        return
    }
  }

  private _handleTransformProperties(valueType, value) {
    switch (valueType) {
      case 'translate':
        return {transform: `translate(${value}${this.valueEnding}, ${value}${this.valueEnding})`};
      case 'translateX':
        return {transform: `translateX(${value}${this.valueEnding})`};
      case 'translateY':
        return {transform: `translateY(${value}${this.valueEnding})`};
      case 'translate3d':
        return {transform: `translate3d(${value}${this.valueEnding}, ${value}${this.valueEnding}, ${value}${this.valueEnding})`};
      case 'scale':
        return {transform: `scale(${value})`};
      case 'rotate':
        return {transform: `rotate(${value}deg)`};
      default:
        return {transform: `scale(${value})`};
    }

  }

}
