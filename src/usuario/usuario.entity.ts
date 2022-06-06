import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UsuarioTamanhoSenhaValidator } from './usuario-tamanho-senha-validator';
import { UsuarioUnicoValidation } from './usuario-unico-validator';

export class Usuario {
  id: number;

  @Expose({
    name: 'username',
  })
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

  @Expose({
    name: 'email',
  })
  @IsEmail({
    message: 'email invalido',
  })
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'senha é obrigatório',
  })
  @UsuarioTamanhoSenhaValidator({
    message: 'senha deve ter no minimo 5 caracteres',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nsomeCompleto é obrigatório',
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
