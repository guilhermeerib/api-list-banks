
import { Injectable, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: { message }
    });
  }
}
