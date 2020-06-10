import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'mtx-modal',
  templateUrl: './mtx-modal.component.html',
  styleUrls: ['./mtx-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MtxModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @ViewChild('content') ref: TemplateRef<any>

  ngOnInit(): void {
  }

  dialogRef: MatDialogRef<any>
  public open() {
    this.close();
    const dialogConfig: MatDialogConfig = { panelClass: 'mtx-modal', autoFocus: false }
    this.dialogRef = this.dialog.open(this.ref, dialogConfig)
  }

  public close() {
    if (this.dialogRef) {
      this.dialogRef.close()
      this.dialogRef = undefined;
    }
  }

}
