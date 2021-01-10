import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateComponent} from './user-create/user-create.component';



const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'user', component: UsersComponent},
{path: 'user/:id', component: UserDetailComponent},
{path: 'create', component: UserCreateComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
