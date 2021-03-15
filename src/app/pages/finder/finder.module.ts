import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChartsModule } from 'ng2-charts'
import { FinderRoutingModule } from './finder-routing.module';
import { FinderComponent } from './component/finder.component';
import { StickerComponent } from './component/sticker/sticker.component';
import { ModalComponent } from './component/modal/modal.component';




@NgModule({
  declarations: [
    FinderComponent,
    StickerComponent,
    ModalComponent,

  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    ChartsModule
  ]
})
export class FinderModule { }
