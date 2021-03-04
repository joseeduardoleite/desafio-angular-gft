import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { APP_BASE_HREF } from '@angular/common';
import { FotosComponent } from './fotos/fotos.component';
import { UsuarioService } from './usuarios/services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FotoService } from './fotos/fotos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent,
    UsuariosComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    FotoService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
