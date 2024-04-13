
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BancoService } from '../../services/banco.service';
import axios from 'axios';
import { Banco } from '../../models/Banco';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})


export class FormsComponent {
  constructor(private bancoService: BancoService) { }
  searchId: number =0

  async findAll() {

    await this.bancoService.buscarTodos()
    const _bancos = this.bancoService.getBancos
    console.log(_bancos)

  };

  async findById() {

    if (this.searchId != null && this.searchId > 0) {
      this.bancoService.findById(this.searchId)

    }
    else {
      alert("Digite um número maior que 0")
    }

  }

}

