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
  totalCount = 0;
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: any;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.dataSource.data = res.data;
      this.totalCount = res.total
      console.log("response..", res)
    })
  }

  sortData(event: any) {
    this.dataSource.sort = this.sort;
  }
  onPageChange(event: PageEvent) {
    this.dataSource.paginator = this.paginator;

  }
  applyFilter(filterValue: any) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
