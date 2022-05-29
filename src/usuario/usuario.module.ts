import { Module } from '@nestjs/common';
import { UsuarioUnicoConstraint } from './usuario-unico-validator';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioUnicoConstraint],
})
export class UsuarioModule {}
