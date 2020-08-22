import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { BtnDescargarComponent } from './components/btn-descargar/btn-descargar.component';
import { EnlacesSuperioresComponent } from './components/enlaces-superiores/enlaces-superiores.component';
import { EnlaceComponent } from './components/enlace/enlace.component';

import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DescargasComponent } from './components/descargar/descargas/descargas.component';
import { FaqsComponent } from './components/faq/faqs/faqs.component';
import { SobreNosotrosComponent } from './components/sn/sobre-nosotros/sobre-nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BannerComponent } from './components/descargar/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenidoFaqsComponent } from './components/faq/contenido-faqs/contenido-faqs.component';
import { RegistroComponent} from './components/sn/registro/registro.component';
import { TerminosComponent } from './components/terminos/terminos/terminos.component';
import { PrivacidadComponent } from './components/terminos/privacidad/privacidad.component'


const appRoutes: Routes = [
  {path:'',component: InicioComponent},
  {path: 'descargas', component:DescargasComponent},
  {path: 'terminos', component:TerminosComponent},
  {path: 'privacidad', component:PrivacidadComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    BtnDescargarComponent,
    EnlacesSuperioresComponent,
    EnlaceComponent,
    InicioComponent,
    DescargasComponent,
    FaqsComponent,
    SobreNosotrosComponent,
    ContactosComponent,
    BannerComponent,
    FooterComponent,
    ContenidoFaqsComponent,
    RegistroComponent,
    TerminosComponent,
    PrivacidadComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
