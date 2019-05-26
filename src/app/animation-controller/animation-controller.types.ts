export type CssMeatures = 'px' | '%' | 'vw' | 'vh' | 'em' | '';


export interface IScrollObj {
  bottomDistance: number;
  topDistance: number;
  sectionDistance?: number;
  maxScroll: number;
  percent: number;
}
