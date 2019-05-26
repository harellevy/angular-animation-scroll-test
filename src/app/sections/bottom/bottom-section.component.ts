import { Component} from '@angular/core';
import { TopSectionComponent } from '../top/top-section.component';

@Component({
  selector: 'app-bottom-section',
  templateUrl: 'bottom-section.component.html',
  styleUrls: ['../shared.scss',
    'bottom-section.component.scss']
})
export class BottomSectionComponent extends TopSectionComponent{
  sectionImage: string = '../../../assets/images/section-3.png';
}
