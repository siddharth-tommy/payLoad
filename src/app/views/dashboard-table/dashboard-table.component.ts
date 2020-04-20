import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { TablesService } from './dashboard-table.service';
import { UserComponent } from './user/user.component';
import { AppService } from 'app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dasshboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardtableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  invoiceList = []
  displayedColumns: string[] = [];
  dataSource: any;

  constructor(private tableService: TablesService, public matDialog: MatDialog, public service: AppService
    , public router: Router, private cdRef: ChangeDetectorRef) { }
  loader = false;
  ngOnInit() {
    this.displayedColumns = ['id', 'device_id', 'email', 'phone', 'status', 'settings', 'more'];
    this.dataSource = new MatTableDataSource();
    this.loadTable()
  }
  loadTable() {
    //   this.service.post('get_data', { "collection_name": "jsonData", "select": { "device_id": "2cd111df53290c08" }, "project_fields": ["profile_data"], "skip": 0, "limit": 1 }).subscribe((data: any) => {
    this.loader = true;
    let parent = this;
    this.service.post('get_data', { "collection_name": "user", "select": {}, "project_fields": [], "skip": 0, "limit": 9999999999 }).subscribe((data: any) => {
      parent.loader = false;
      if (data.status  && data.Data.length != 0) {
        let obj = {};
        obj = Object.keys(data.Data.reduce((prev, next) => {
          if (!obj[next['device_id']]) obj[next['device_id']] = next;
          return obj;
        }, obj)).map((i) => obj[i]);

        console.log("table data");
        console.log(obj);

        this.paginator.pageSize = 25;

        this.dataSource.data = obj;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }else{
      }
      this.cdRef.detectChanges();
    }, error => {
      this.cdRef.detectChanges();
      parent.loader = false;
      console.log(error);
    });
  }


  ngAfterViewInit() {

    this.paginator.pageSize = 25;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addUser() {
    let dialogRef = this.matDialog.open(UserComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        action: 'new'
      }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  rowClick(datas) {
    this.router.navigate(['/userdetails/' + datas.device_id]);
  }
  settings(datas) {
    this.router.navigate(['/Configuration/' + datas.device_id]);
  }
}
