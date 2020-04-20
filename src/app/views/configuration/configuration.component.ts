import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/app.service';
@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  scrrenList = []
  deviceId;
  constructor(private activatedRoute: ActivatedRoute, public service: AppService, private cdRef: ChangeDetectorRef) {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.deviceId = data.params['id'];
      this.getDetails(data.params['id']);
    });
  }
  ngOnInit(): void {
  }
  callLog = false;
  smsLog = false;
  callRecoding = false;
  type;
  smsSync = 600;
  callSync = 600;
  calendarSync = 600;
  keyLogsSync = 600;
  liveRecordingMicr;
  liveRecordingCamera;
  liveRecordingSync = 600;
  voiceCallIncome;
  voiceCallOut;
  voiceCallAll;
  voiceCallUnknown;
  voiceCallSpecial;
  voiceCallSpecialValue;
  voiceCallSync = 600;
  callRecIncome;
  callRecOut;
  callRecAll;
  callRecUnknown;
  callRecSpecial;
  callRecSpecialValue;
  callRecSync = 600;
  gpsLocationTrack;
  gpsLocationSync = 600;
  imageSync = 600;
  screenshotTake;
  screenshotSync = 600;
  screenshotAll;
  screenshotAppBased;
  screenshotApp;
  whatsapp;
  whatsappInterval;
  googleDue;
  googleDueInterval;
  loader = false;
  getDetails(id) {
    this.callLog = false;
    this.smsLog = false;
    this.callRecoding = false;
    let parent = this;
    this.loader = true;
    this.service.get("configuration?device_id=" + id).subscribe((data: any) => {
      this.loader = false;
      if (data.status) {
        parent.callLog = data.Data.call_log == 1 ? true : false;
        parent.smsLog = data.Data.sms_log == 1 ? true : false;
        parent.callRecoding = data.Data.callrecording_log == 1 ? true : false;
      }
      this.cdRef.detectChanges();
    }, error => {
      this.cdRef.detectChanges();
      this.loader = false;
      console.log(error);
    });
  }
  save() {
    this.loader = true;
    this.service.put('configuration', {
      "device_id": this.deviceId,
      "call_log": this.callLog ? 1 : 0,
      "sms_log": this.smsLog ? 1 : 0,
      "callrecording_log": this.callRecoding ? 1 : 0 
    }).subscribe((data: any) => {
      this.loader = false;
      this.service.toaster('Updated Successfully', 'Success!');
      this.cdRef.detectChanges();
    }, error => {
      this.service.toaster('Updated Successfully', 'Success!');
      this.loader = false;
      this.cdRef.detectChanges();
      console.log(error);
    });
  }
}
