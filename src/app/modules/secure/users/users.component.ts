import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: any;
  constructor(private userService: UserService) { }
  
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getUser();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      console.log("response..",res)

    })
  }

  sortData(event:any) {
    this.dataSource.sort = this.sort;
  }
  onPageChange(event:PageEvent) {
    this.dataSource.paginator = this.paginator;
   
  }
  applyFilter(filterValue: any) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
