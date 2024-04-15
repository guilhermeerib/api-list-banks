import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BancoService } from '../../services/banco.service';

import { ErrorDialogService } from '../../services/error-dialog.service';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  constructor(
    private bancoService: BancoService,
    private errorDialogService: ErrorDialogService
  ) {}

  findId: number | null = null;

  async findAllBancos() {
    await this.bancoService.findAll();
  }

  async findByIdBanco() {
    if (this.findId != null && this.findId > 0) {
      try {
        this.bancoService.findById(this.findId);
      } catch {
        this.errorDialogService.openDialog(
          'O recurso que você está tentando acessar não foi encontrado.'
        );
      }
    } else if (
      this.findId != null ||
      (this.findId != null && this.findId < 1)
    ) {
      this.errorDialogService.openDialog(`Digite um código maior que 0(Zero)`);
    } else {
      this.errorDialogService.openDialog(`Digite um código válido.`);
    }
  }
}
