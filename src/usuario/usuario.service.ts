import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [];

  public buscaNomeUsuario(nome: string): Usuario {
    const usuario = this.usuarios.find((usuario) => usuario.nome === nome);

    return usuario;
  }

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }
}
