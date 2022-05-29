import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class UsuarioUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}
  validate(
    nomeDeUsuario: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !!this.usuarioService.buscaNomeUsuario(nomeDeUsuario) ? false : true;
  }
}

export function UsuarioUnicoValidation(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UsuarioUnicoConstraint,
    });
  };
}
