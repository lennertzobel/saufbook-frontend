import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-link',
  templateUrl: './navigation-link.component.html',
})
export class NavigationLinkComponent {
  @Input() url = '/';
  @Input() options = { exact: false };
}
