import { Body, Controller, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario: Usuario) {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return usuarioCriado;
  }
}
