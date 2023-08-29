import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'bgd-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <bgd-header />
    <div class="buffer"></div>
    <router-outlet />
    <bgd-footer />
  `,
  styles: [
    `
      .buffer {
        height: 4rem;
      }
    `,
  ],
})
export class AppComponent {}
