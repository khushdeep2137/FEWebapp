import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from './users/users.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SecureRoutingModule } from './secure.routing.module';
import { AuthenticatedMasterComponent } from 'src/app/layout/authenticated/master/master.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AuthenticatedMasterComponent,
    UsersComponent,
    UserOverviewComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule

    
  ]
})
export class SecureModule { }
