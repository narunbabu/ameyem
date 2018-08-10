import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { GeoSolComponent } from './geo-sol/geo-sol.component';
// import { CarouselModule } from 'angular4-carousel';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonService } from '../service/jsonservice';
// import { NgbdCarouselBasic  } from './carousel-basic/carousel-basic.component';//CarouselModule
@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, FeaturesComponent, GeoSolComponent],
  providers: [JsonService]
})
export class StaticModule {}
