import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Banco } from '../models/banco.model';
import axios, { AxiosError } from 'axios';
import { ErrorDialogService } from './error-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class BancoService {
  private bancosSubject = new BehaviorSubject<Banco[]>([]);
  bancos$: Observable<Banco[]> = this.bancosSubject.asObservable();
  constructor(private errorDialogService: ErrorDialogService) {}

  //Getters e Setters
  setBancos(bancos: Banco[]) {
    this.bancosSubject.next(bancos);
  }

  getBancos(): Observable<Banco[]> {
    return this.bancos$;
  }

  // Metodos do servico
  async findAll() {
    try {
      const resposta = await axios.get('http://localhost:8080/banco/todos');
      const _bancos: Banco[] = resposta.data;
      if (_bancos != null && _bancos.length > 0) {
        this.setBancos(_bancos);
      } else {
        this.errorDialogService.openDialog(`Nenhum Banco foi encontrado.`);
      }
    } catch (error) {
      if ((error as AxiosError).code === 'ECONNREFUSED') {
        console.error('Erro de conexão: O servidor recusou a conexão.');
      } else {
        this.errorDialogService.openDialog(`Ocorreu um erro desconhecido`);
        console.error('Erro:', error);
      }
    }
  }

  async findById(id: number) {
    try {
      const resposta = await axios.get(`http://localhost:8080/banco/${id}`);
      const _banco = resposta.data;
      this.setBancos([_banco]);
    } catch (error) {
      const statusCode =
        (error as AxiosError).response && (error as AxiosError).response?.status
          ? (error as AxiosError).response?.status
          : 'desconhecido';
      if (
        (error as AxiosError).response &&
        (error as AxiosError).response?.status === 404
      ) {
        this.errorDialogService.openDialog(
          `O Banco com Código de Compensação "${id}" não foi encontrado.`
        );
        console.error('Recurso não encontrado:', error);
      } else if ((error as AxiosError).code === 'ECONNREFUSED') {
        console.error('Erro de conexão: O servidor recusou a conexão.');
        this.errorDialogService.openDialog(
          `Não foi possível conectar ao servidor. O servidor recusou a conexão ou está desligado execução.`
        );
      } else {
        console.error('Erro:', error);
        this.errorDialogService.openDialog(`Ocorreu um erro "${statusCode}".`);
      }
    }
  }
}
