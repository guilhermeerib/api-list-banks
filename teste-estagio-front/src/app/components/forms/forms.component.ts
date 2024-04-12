import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  searchId: number | null = 1
  _lista_bancos: Banco[] | null = null;
  _banco_selecionado: Banco | null = null
  _exibir_banco: boolean = false

  async findAll() {
    await axios.get('http://localhost:8080/banco/todos')
      .then((resposta) => {
        this._lista_bancos = resposta.data;
        this._exibir_banco = true
        this._banco_selecionado =null
        console.log('Resposta da requisição:', this._lista_bancos);

      })
      .catch((erro) => {
        console.error('Erro na requisição:', erro);
        alert("Erro ")
      });
  };

  async findById() {

    if (this.searchId != null && this.searchId > 0) {
      await axios.get(`http://localhost:8080/banco/${this.searchId}`)
        .then((resposta) => {
          this._lista_bancos = null
          this._banco_selecionado = resposta.data;
          this._exibir_banco = true
          console.log('Resposta da requisição:', this._banco_selecionado);
          // Aqui você pode manipular a resposta como desejar
        })
        .catch((erro) => {
          console.error('Erro na requisição:', erro);
          alert(`Erro na requisição${erro}`)
        });
    }
    else {
      alert("Digite um número maior que 0")
    }

  }

}

