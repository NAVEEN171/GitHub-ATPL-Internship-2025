import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserFormDialog } from '../dialogs/user-form-dialog/user-form-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-dialog',
  imports: [MatButtonModule, MatSnackBarModule],
  templateUrl: './form-dialog.html',
  styleUrl: './form-dialog.css',
})
export class FormDialog {
  dialog = inject(MatDialog);
  constructor(private messageContainer: MatSnackBar) {}

  openDialog() {
    let dialogRef = this.dialog.open(UserFormDialog);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.name);
      this.messageContainer.open(`details saved ${result.name} ! Stay tuned `);
    });
  }
}
