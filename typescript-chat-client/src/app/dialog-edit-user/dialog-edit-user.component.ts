import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tcc-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  paramss: any = {
    title: 'title',
    username: 'name',
    dialogType: 'edit-user'
  };
  usernameFormControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MdDialogRef<DialogEditUserComponent>,
    @Inject(MD_DIALOG_DATA) public params: any) {
  }

  ngOnInit() {
  }

  public onSave(): void {
    this.dialogRef.close(this.params.username);
  }
}
