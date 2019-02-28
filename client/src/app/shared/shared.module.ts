import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    MatMenuModule
  ],
  exports: [ 
    MaterialModule,
    TranslateModule,
    MatMenuModule
  ],
  declarations: []
})
export class SharedModule { }
