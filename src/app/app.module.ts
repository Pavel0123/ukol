import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersComponent } from './users/users.component';
import { ExcerptPipe } from './excerpt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserDetailComponent,
    UserCreateComponent,
    UsersComponent,
    ExcerptPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
