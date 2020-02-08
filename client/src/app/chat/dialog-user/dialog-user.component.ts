import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  previousUsername: string;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
              @Inject(MAT_DIALOG_DATA) public params: any,
              private translate: TranslateService) {
    this.previousUsername = params.username ? params.username : undefined;
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  public onSave(): void {
    this.dialogRef.close({
      username: this.params.username,
      dialogType: this.params.dialogType,
      previousUsername: this.previousUsername
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
