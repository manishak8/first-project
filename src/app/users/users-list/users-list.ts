import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../models/user';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['first_name', 'last_name', 'age', 'email', 'web'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      this.dataSource.data = res;
    });

    this.dataSource.filterPredicate = (data, filter) =>
      data.first_name.toLowerCase().includes(filter) ||
      data.last_name.toLowerCase().includes(filter);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openDetail(id: number) {
    this.router.navigate(['/users', id]);
  }
}