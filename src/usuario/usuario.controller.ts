import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nome')
  public buscarNomeUsuario(@Param('nome') nome: string): Usuario {
    const usuario = this.usuarioService.buscaNomeUsuario(nome);
    return usuario;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return usuarioCriado;
  }
}
