import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgd-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <a class="home-link" routerLink="/">
        <img
          class="logo"
          alt="Angular Belgrade Logo"
          src="/angular-belgrade.svg"
          fetchPriority="high"
          loading="eager"
          height="40"
          width="40"
        />
      </a>

      <ul>
        <li><a routerLink="/" fragment="speakers">Speakers</a></li>
        <li><a routerLink="/" fragment="sponsors">Sponsors</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        padding: 0.75rem;
        border-bottom: 1px solid #303b57;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        margin: 0 1.25rem 0 0;
        padding: 0;
      }

      a {
        text-decoration: none;
      }

      .home-link {
        justify-self: flex-start;
      }

      .logo:hover {
        filter: drop-shadow(0 0 1rem #a6abbd);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
