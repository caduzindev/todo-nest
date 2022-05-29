import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UsuarioUnicoValidation } from './usuario-unico-validator';

export class Usuario {
  id: number;

  @UsuarioUnicoValidation({
    message: 'nome precisa ser único',
  })
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
