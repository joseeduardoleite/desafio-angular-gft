import { Component, OnInit } from '@angular/core';
import { API } from '../usuarios/usuarios';
import { FotoService } from './fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html'
})
export class FotosComponent implements OnInit {

  constructor(private fotoService: FotoService) {
  }

  public fotos!: API[];
  
  ngOnInit() {
    this.fotoService.get().subscribe(fotos => {
      this.fotos = fotos.map(item => {
        return new API(item.id, item.name, item.username, item.email, item.idFoto, item.title, item.url)
      });
    })
  }
}
