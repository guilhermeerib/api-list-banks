import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BancoService } from '../../services/banco.service'; // Importe o serviço bancoService

import { Banco } from '../../models/Banco';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-table-banco',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table-banco.component.html',
  styleUrl: './table-banco.component.scss'
})

export class TableBancoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<Banco>();
  bancos$: Observable<Banco[]> = of([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
    this.bancos$ = this.bancoService.bancos$;
    this.bancos$.subscribe(bancos => {
      if (bancos) {
        this.loadBancos();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadBancos() {
    this.bancoService.getBancos().subscribe(bancos => {
      this.dataSource.data = bancos;
    });
  }


}




