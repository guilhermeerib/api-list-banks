import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Banco } from '../models/Banco';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  private bancosSubject = new BehaviorSubject<Banco[]>([]);
  bancos$: Observable<Banco[]> = this.bancosSubject.asObservable();
  constructor() { }

  //Getters e Setters
  setBancos(bancos: Banco[]) {
    this.bancosSubject.next(bancos);
  }

  getBancos(): Observable<Banco[]> {
    return this.bancos$;
  }

  // Metodos do servico
  // bancoService
  async buscarTodos() {
    try {
      const resposta = await axios.get('http://localhost:8080/banco/todos');
      const bancos: Banco[] = resposta.data
      this.setBancos(bancos)
      console.log(bancos)
    } catch (error) {
      console.error('Erro na requisição:', error);

    }
  }
  async findById(id: number) {
    console.log("chamdo service by id");

    try {
      const resposta = await axios.get(`http://localhost:8080/banco/${id}`)
      const _banco =  resposta.data
      this.setBancos([_banco])
    } catch (error) {
      alert(`Erro na requisição: ${error}`);

    }
  }





}
