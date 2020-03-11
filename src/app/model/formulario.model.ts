import { DadosPessoais } from './dados-pessoais.model';

export interface FormularioReserva {
  dadosPessoais?: DadosPessoais;
  acompanhante?: DadosPessoais;
  cep: string;
  endereco: string;
  pais: string;
  estado: string;
  telefone: string;
  filme: number;
  preco: number;
  frete: number;
  total: number;
}
