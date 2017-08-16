import { Component, OnInit, Inject,ChangeDetectorRef } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'tcc-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  paramss:any = {
    title: 'title',
    username: 'name',
    dialogType: 'edit-user'
  };

  constructor(public dialogRef: MdDialogRef<DialogEditUserComponent>,
              private cdRef: ChangeDetectorRef,
              @Inject(MD_DIALOG_DATA) public params: any) { 
                //  this.cdRef.detectChanges();
              }

  ngOnInit() {
  }

  public onSave(): void {
    this.dialogRef.close(this.params.username);
  }
}
