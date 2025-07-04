import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesListResponse } from '../types/states-list-response';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private readonly stateList: StatesListResponse = [
    { id: 12, description: 'Acre', uf: 'AC' },
    { id: 27, description: 'Alagoas', uf: 'AL' },
    { id: 16, description: 'Amapá', uf: 'AP' },
    { id: 13, description: 'Amazonas', uf: 'AM' },
    { id: 29, description: 'Bahia', uf: 'BA' },
    { id: 23, description: 'Ceará', uf: 'CE' },
    { id: 53, description: 'Distrito Federal', uf: 'DF' },
    { id: 32, description: 'Espírito Santo', uf: 'ES' },
    { id: 52, description: 'Goiás', uf: 'GO' },
    { id: 21, description: 'Maranhão', uf: 'MA' },
    { id: 51, description: 'Mato Grosso', uf: 'MT' },
    { id: 50, description: 'Mato Grosso do Sul', uf: 'MS' },
    { id: 31, description: 'Minas Gerais', uf: 'MG' },
    { id: 15, description: 'Pará', uf: 'PA' },
    { id: 25, description: 'Paraíba', uf: 'PB' },
    { id: 41, description: 'Paraná', uf: 'PR' },
    { id: 26, description: 'Pernambuco', uf: 'PE' },
    { id: 22, description: 'Piauí', uf: 'PI' },
    { id: 33, description: 'Rio de Janeiro', uf: 'RJ' },
    { id: 24, description: 'Rio Grande do Norte', uf: 'RN' },
    { id: 43, description: 'Rio Grande do Sul', uf: 'RS' },
    { id: 11, description: 'Rondônia', uf: 'RO' },
    { id: 14, description: 'Roraima', uf: 'RR' },
    { id: 42, description: 'Santa Catarina', uf: 'SC' },
    { id: 35, description: 'São Paulo', uf: 'SP' },
    { id: 28, description: 'Sergipe', uf: 'SE' },
    { id: 17, description: 'Tocantins', uf: 'TO' },
  ];

  getStates(): Observable<StatesListResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.stateList);
        observer.complete;
      }, 3000);
    });
    // return of(this.stateList);
  }
}
