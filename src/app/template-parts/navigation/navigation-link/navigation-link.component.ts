import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styles: [],
})
export class NavigationLinkComponent implements OnInit {
  @Input() url = '/';
  @Input() options = { exact: false };

  constructor() {}

  ngOnInit(): void {}
}
