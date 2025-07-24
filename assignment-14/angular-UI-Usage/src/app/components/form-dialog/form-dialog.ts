import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserFormDialog } from '../dialogs/user-form-dialog/user-form-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  imports: [MatButtonModule],
  templateUrl: './form-dialog.html',
  styleUrl: './form-dialog.css',
})
export class FormDialog {
  dialog = inject(MatDialog);

  openDialog() {
    let dialogRef = this.dialog.open(UserFormDialog);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      console.log(result);
      console.log(result.name);
    });
  }
}
