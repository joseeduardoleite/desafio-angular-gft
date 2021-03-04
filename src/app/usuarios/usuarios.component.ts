import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuarios.service';
import { API } from './usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  
  constructor(private usuarioService: UsuarioService) {
  }

  public usuarios!: API[];
  
  ngOnInit() {
    this.usuarioService.get().subscribe(usuarios => {
      this.usuarios = usuarios.map(item => {
        return new API(item.id, item.name, item.username, item.email, item.idFoto, item.title, item.url)
      });
    })
  }
}
