import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from 'projects/mat-ex/src/lib/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-ex-app';

  constructor(private dialog: MatDialog) { }

  onDialogOpen() {
    this.dialog.open(ModalDialogComponent, { data: { type: 'submit', variant:'flat', color:'primary' } })
  }

}

