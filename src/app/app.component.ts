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
    <main>
      <router-outlet />
    </main>
    <bgd-footer />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        margin-top: 4rem;
        flex: 1;
      }
    `,
  ],
})
export class AppComponent {}
