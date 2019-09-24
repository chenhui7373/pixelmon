import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixelmonUtilModule } from '@pixelmon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TrendComponent } from './trend.component';

const COMPONENTS = [TrendComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, PixelmonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TrendModule {}