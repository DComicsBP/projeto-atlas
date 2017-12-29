import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaambeintalRsgComponent } from './saambeintal-rsg/saambeintal-rsg.component';
import { DemografiaRsgComponent } from './demografia-rsg/demografia-rsg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SaambeintalRsgComponent, DemografiaRsgComponent]
})
export class RsgModule { }
