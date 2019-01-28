import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {MaterialModule} from './../material-module/material-module.module';
import { DragInDropComponent } from './drag-in-drop.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DragInDropComponent],
  exports: [DragInDropComponent]
})
export class DragInDropModule { }
