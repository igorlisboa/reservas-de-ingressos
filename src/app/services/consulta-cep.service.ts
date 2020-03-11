import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CEPModel } from '../model/cep.model';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string): Observable<CEPModel> {

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    console.log('-------' + cep);
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get<CEPModel>(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({} as CEPModel);
  }

}


