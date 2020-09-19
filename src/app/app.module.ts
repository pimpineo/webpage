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
import { PrivacidadComponent } from './components/terminos/privacidad/privacidad.component';
import { EsComponent } from './components/btn-selectores-idioma/es/es.component';
import { EnComponent } from './components/btn-selectores-idioma/en/en.component';
import { HomeComponent } from './components/idiomas/ingles/home/home.component';
import { TopLinksComponent } from './components/idiomas/ingles/top-links/top-links.component';
import { AboutUsComponent } from './components/idiomas/ingles/about-us/about-us.component';
import { ContactsComponent } from './components/idiomas/ingles/contacts/contacts.component';
import { RegisterComponent } from './components/idiomas/ingles/register/register.component';
import { MenuEnComponent } from './components/idiomas/ingles/menu-en/menu-en.component';
import { TermsComponent } from './components/idiomas/ingles/terms/terms.component';
import { PrivacyComponent } from './components/idiomas/ingles/privacy/privacy.component'


const appRoutes: Routes = [
  {path:'',component: InicioComponent},
  {path: 'en', component:HomeComponent},
  {path: 'terminos', component:TerminosComponent},
  {path: 'privacidad', component:PrivacidadComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'privacy', component:PrivacyComponent}
  
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
    EsComponent,
    EnComponent,
    HomeComponent,
    TopLinksComponent,
    AboutUsComponent,
    ContactsComponent,
    RegisterComponent,
    MenuEnComponent,
    TermsComponent,
    PrivacyComponent,
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
