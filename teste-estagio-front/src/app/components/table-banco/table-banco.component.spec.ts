import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBancoComponent } from './table-banco.component';

describe('TableBancoComponent', () => {
  let component: TableBancoComponent;
  let fixture: ComponentFixture<TableBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBancoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
