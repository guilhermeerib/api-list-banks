
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Banco } from '../../models/Banco';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table-banco',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table-banco.component.html',
  styleUrl: './table-banco.component.scss'
})
export class TableBancoComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<Banco>(BANCO_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const BANCO_DATA: Banco[] = [
  { id: 1, nome: "banco 1" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
  { id: 2, nome: "banco2" },
]




