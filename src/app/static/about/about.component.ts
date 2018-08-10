import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  //   public imageSources: string[] = [
  //     '/assets/banner-bg.jpg',
  //     '/assets/geo-sol-s.png',
  //     '/assets/refinery.jpg'
  //  ];

  //  public config: ICarouselConfig = {
  //    verifyBeforeLoad: true,
  //    log: false,
  //    animation: true,
  //    animationType: AnimationConfig.SLIDE,
  //    autoplay: true,
  //    autoplayDelay: 2000,
  //    stopAutoplayMinWidth: 768
  //  };

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../assets/release-butler.png');
  trainingCourses = require('../../../assets/trainings.jpg');
  oilgasServices = require('../../../assets/geo-sol-s.png');

  constructor() {}

  ngOnInit() {}
}
