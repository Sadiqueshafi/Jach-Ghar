import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from './alert.model';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy{
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {



}

cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
        [AlertType.Success]: 'alert alert-success',
        [AlertType.Error]: 'alert alert-danger',
        [AlertType.Info]: 'alert alert-info',
        [AlertType.Warning]: 'alert alert-warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
        classes.push('fade');
    }

    return classes.join(' ');
}

ngOnDestroy() {
  // unsubscribe to avoid memory leaks
  this.alertSubscription.unsubscribe();
  this.routeSubscription.unsubscribe();
}

}
