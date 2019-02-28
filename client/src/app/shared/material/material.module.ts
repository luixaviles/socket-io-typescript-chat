import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatIconModule, 
  MatFormFieldModule,
  MatInputModule, 
  MatListModule,
  MatSidenavModule, 
  MatToolbarModule, 
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatListModule,
    MatSidenavModule, 
    MatToolbarModule,
    TranslateModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatListModule,
    MatSidenavModule, 
    MatToolbarModule,
    TranslateModule,
    MatMenuModule
  ],
  declarations: [],
  providers: [
    MatDialog
  ]
})
export class MaterialModule { }
