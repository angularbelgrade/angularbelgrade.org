import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-header',
  standalone: true,
  template: `
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        padding: 1.25rem;
        border-bottom: 1px solid #303b57;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: inline-block;
        margin-right: 1.25rem;
      }

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
      }

      a:hover {
        color: #d62f39;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
