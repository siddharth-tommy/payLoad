import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AppService } from 'app/app.service';

@Component({
  selector: 'call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss']
})
export class CallRecordComponent implements OnInit {
  @Input() recordList: Array<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  invoiceList = []
  displayedColumns: string[] = [];
  dataSource: any;
  
  constructor(public service: AppService) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  download(id, name) {
    let parent = this;
    this.service.getFile('file_data?file_id=' + id+'&is_binary=true').subscribe((data: any) => {
        var blob = new Blob([data], { type: "audio/mpeg" });
        var link: any = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = name;
        link.download = fileName;
        link.click();
    }, error => {
      console.log(error);
    });
  }


  ngAfterViewInit() {
    this.recordList.map(d => {
      let fileName = d.filename;
      if(fileName) {
        let fileNamelist = fileName.split('-');
        let date = fileNamelist[2].split(".");
        d.type = fileNamelist[0];
        d.phone = fileNamelist[1];
        d.date = new Date(date[0]);
        return d;
      }
    });

    this.paginator.pageSize = 25;
    debugger;
    this.dataSource.data = this.recordList;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'type', 'phone', 'date', 'Download'];
    this.dataSource = new MatTableDataSource();
  }

}
