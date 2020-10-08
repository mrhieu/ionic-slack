import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreadPageRoutingModule } from './thread-routing.module';

import { ThreadPage } from './thread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreadPageRoutingModule
  ],
  declarations: [ThreadPage]
})
export class ThreadPageModule {}
