import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bgd-footer',
  standalone: true,
  template: `
    <footer>
      <p>
        Made with <a href="https://analogjs.org" target="_blank">AnalogJS</a> ❤️
      </p>

      <div class="footer-links">
        <a
          href="https://twitter.com/angularbelgrade/"
          target="_blank"
          title="Twitter"
        >
          <img
            src="/icons/twitter.svg"
            alt="Twitter"
            height="24"
            width="24"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/angularbelgrade/"
          target="_blank"
          title="LinkedIn"
        >
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            height="24"
            width="24"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.youtube.com/angularbelgrade/"
          target="_blank"
          title="YouTube"
        >
          <img
            src="/icons/youtube.svg"
            alt="YouTube"
            height="24"
            width="24"
            loading="lazy"
          />
        </a>

        <a
          href="https://github.com/angularbelgrade/"
          target="_blank"
          title="GitHub"
        >
          <img
            src="/icons/github.svg"
            alt="GitHub"
            height="24"
            width="24"
            loading="lazy"
          />
        </a>
      </div>
      <nav class="footer-links">
        <a routerLink="/code-of-conduct" routerLinkActive="active-link"
          >Code of Conduct</a
        >
        <span>&middot;</span>
        <a routerLink="/terms-and-privacy" routerLinkActive="active-link"
          >Terms & Privacy</a
        >
      </nav>
      <p class="footer-copy">
        2020-{{ year }} Angular Belgrade © Webkraft Studio DOO All rights
        reserved.
      </p>
    </footer>
  `,

  styles: [
    `
      footer {
        text-align: center;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-top: 1px solid #232125;
      }

      p {
        margin: 0;
      }

      .footer-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
      }

      .footer-links > a {
        display: flex;
      }

      .footer-copy {
        padding: 0 1rem;
        word-break: break-word;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
