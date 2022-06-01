import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { userSetting } from '../model/userSettings';
import { UserSettingsService } from '../service/user-settings.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = [ 'name', 'email', 'sex','password','notes','date'];
  dataSource= new MatTableDataSource<userSetting>();
  public data: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private serviceData : UserSettingsService) {

  }
  ngOnInit(): void {
   this.serviceData.getAllUsers().subscribe((respo:any)=>{
     this.dataSource.data=respo;
     console.log("the user datas are: ",this.data);
   })
  }


  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.data.filter = filterValue;
  }

}

