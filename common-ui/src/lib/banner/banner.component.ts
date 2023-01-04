import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-app-banner',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title = 'BANNER';
}
