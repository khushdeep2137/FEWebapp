import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { AuthenticatedMasterComponent } from 'src/app/layout/authenticated/master/master.component';

const routes: Routes = [
  {
    path: "",
    component: AuthenticatedMasterComponent,
    children: [
      {
        path: '',
        redirectTo: "users",
        pathMatch :"full"
      },
      {
        path: 'users',
        component : UsersComponent
      },
      {
        path: 'user-overview',
        component : UserOverviewComponent
      },
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
