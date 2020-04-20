import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'sms-log',
  templateUrl: './sms-log.component.html',
  styleUrls: ['./sms-log.component.scss']
})

export class SmsLogComponent implements OnInit {
  @Input() messageList: Array<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  invoiceList = []
  displayedColumns: string[] = [];
  dataSource: any;
  
  constructor() { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadFile() {
    let data = this.messageList;
    let filename = "sms-log";
    const replacer = (key, value) => value === null ? '' : value.toString();
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    var blob = new Blob([csvArray], {type: 'text/csv' });
    var link: any = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename + ".csv";
    link.click();
  }

  ngAfterViewInit() {
    this.paginator.pageSize = 25;
    debugger;
    this.dataSource.data = this.messageList;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'PhoneNumber', 'type', 'Message_data', 'modified_on'];
    this.dataSource = new MatTableDataSource();
  }
}
