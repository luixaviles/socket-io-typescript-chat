import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'tcc-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  constructor(public dialogRef: MdDialogRef<DialogEditUserComponent>,
              @Inject(MD_DIALOG_DATA) public username: string) { }

  ngOnInit() {
  }

  public onSave(): void {
    this.dialogRef.close(this.username);
  }

}
