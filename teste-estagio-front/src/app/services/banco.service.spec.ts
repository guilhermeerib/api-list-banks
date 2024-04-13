import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Banco } from './banco.model';

import { BancoService } from './banco.service';

describe('BancoService', () => {
  let service: BancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
