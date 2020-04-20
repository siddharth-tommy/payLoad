import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AppService } from 'app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  invoiceList = []
  displayedColumns: string[] = [];
  dataSource: any;
  messageList = []
  callList = []
  recordList = []
  deviceId;
  constructor(public matDialog: MatDialog, public service: AppService, private activatedRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef) {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.deviceId = data.params['id'];
      this.loadUserDetails(data.params['id'])
      this.loadUserFile(data.params['id']);
    });
  }
  ngOnInit() {

  }
  loader = false;
  loadUserDetails(id) {
    this.loader = true;
    this.messageList = []
    this.callList = []
    //  this.recordList = []
    this.service.post('get_data', { "collection_name": "jsonData", "select": { "device_id": id }, "project_fields": [], "skip": 0, "limit": 9999999999 }).subscribe((data: any) => {
      this.loader = false;
      if (data.status && data.Data.length != 0) {
        for (let j = 0; j < data.Data.length; j++) {
          let listDetails = JSON.parse(data.Data[j].sync_data)
          for (let i = 0; i < listDetails.length; i++) {
            //console.log("data", listDetails[i].module_data);
            //console.log("name", listDetails[i].module_name);
            //console.log("type", listDetails[i].module_type);
            if (listDetails[i].module_name == 'Message') {
              debugger;
              if (listDetails[i].modified_on != undefined) {
                let tdata = JSON.parse(listDetails[i].module_data);
                tdata.modified_on = listDetails[i].modified_on;
                tdata.type = listDetails[i].module_type;
                this.messageList.push(tdata);
              } else {
                this.messageList.push(JSON.parse(listDetails[i].module_data));
              }
            } else if (listDetails[i].module_name == 'Call') {
              this.callList.push(JSON.parse(listDetails[i].module_data));
            } else {
              //    this.recordList.push(listDetails[i].module_data);
            }
          }
        }
        //   this.messageList = this.messageList.filter(function(item, pos) {
        //     return this.messageList.indexOf(item) == pos;
        //- })
        try {
          var arrayUnique = function (arr) {
            return arr.filter(function (item, index) {
              return arr.indexOf(item) >= index;
            });
          };
          this.messageList.reverse();
          //this.recordList.reverse();
          this.callList.reverse();
          this.messageList = arrayUnique(this.messageList)
          //this.recordList=arrayUnique(this.recordList)
          this.callList = arrayUnique(this.callList)
        } catch (e) {
          console.log();
        }
      }
      this.cdRef.detectChanges();
    }, error => {
      this.loader = false;
      this.cdRef.detectChanges();
      console.log(error);
    });
  }
  refresh() {
    this.loadUserDetails(this.deviceId);
    this.loadUserFile(this.deviceId);
  }
  loader2 = false;
  loadUserFile(id) {
    this.loader2 = true;
    let parent = this;
    this.recordList = []
    this.service.post('get_data', { "collection_name": "gridfs.files", "select": { "metadata.deviceid": id }, "project_fields": [] }).subscribe((data: any) => {
      parent.loader2 = false;
      if (data.status) {
        this.recordList = data.Data;
      }
      this.cdRef.detectChanges();
    }
      , error => {
        this.loader2 = false;
        this.cdRef.detectChanges();
        console.log(error);
      });
  }

  my;
  download(id, name) {
    //   this.service.post('get_data', { "collection_name": "jsonData", "select": { "device_id": "2cd111df53290c08" }, "project_fields": ["profile_data"], "skip": 0, "limit": 1 }).subscribe((data: any) => {
    this.loader = true;
    let parent = this;
    this.service.getFile('file_data?file_id=' + id+'&is_binary=true').subscribe((data: any) => {
      parent.loader = false;
        this.my = data;
        // var binary_string = window.atob(data);
        // var len = binary_string.length;
        // var bytes = new Uint8Array(len);
        // for (var i = 0; i < len; i++) {
        //   bytes[i] = binary_string.charCodeAt(i);
        // }
        var blob = new Blob([data], { type: "audio/mpeg" });
        var link: any = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = name;
        link.download = fileName;
        link.click();

      // var link = document.createElement('a');
      // link.href = "audio.MP3";
      // link.setAttribute('download', this.my+".mp3");
      // document.getElementsByTagName("body")[0].appendChild(link);
      // // Firefox
      // if (document.createEvent) {
      //   var event = document.createEvent("MouseEvents");
      //   event.initEvent("click", true, true);
      //   link.dispatchEvent(event);
      // }
      // // IE
      // else if (link.click) {
      //   link.click();
      // }
      // link.parentNode.removeChild(link);
      this.cdRef.detectChanges();
    }, error => {
      this.cdRef.detectChanges();
      parent.loader = false;
      console.log(error);
    });
  }
}