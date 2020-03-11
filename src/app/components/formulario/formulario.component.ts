import { Component, OnInit } from '@angular/core';
import { FormularioReserva } from 'src/app/model/formulario.model';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DadosPessoais} from '../../model/dados-pessoais.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wiz-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  dadosPessoais: FormularioReserva ;
  formGroup: FormGroup;
  reserva: FormularioReserva = {
    dadosPessoais: {
      nome: '',
      ultimoNome: '',
      cpf: '',
    } as DadosPessoais,
    acompanhante: {
      nome: '',
      ultimoNome: '',
      cpf: '',
    } as DadosPessoais,
  } as FormularioReserva;

  constructor(
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {

  }

  consultaCep(cep: string) {
    this.cepService.consultaCEP(cep).subscribe(response => {
      this.reserva.cep = response.cep;
      this.reserva.endereco = response.logradouro;
      this.reserva.estado = response.uf;
      this.reserva.pais = 'Brasil';
      console.log(cep);
      console.log(response);
    });
  }

}
