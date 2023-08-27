import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header.component';

@Component({
  selector: 'bgd-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <bgd-header/>
    <router-outlet/>
  `,
})
export class AppComponent {
}
