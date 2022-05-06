import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty({
    message: 'nome é obrigatório',
  })
  @IsString({
    message: 'nome precisa ser uma string',
  })
  nome: string;

  @IsEmail({
    message: 'email invalido',
  })
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nsomeCompleto é obrigatório',
  })
  nomeCompleto: string;
  dataDeEntrada: Date;
}
