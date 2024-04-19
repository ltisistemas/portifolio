import { Platform } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() drawer: any;

  isMobile = this.platform.ANDROID || this.platform.IOS;

  constructor(private platform: Platform) {}

  ngOnInit() {}
}
