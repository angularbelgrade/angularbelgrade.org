import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-footer',
  standalone: true,
  template: `
    <footer>
      <p>
        Made with <a href="https://analogjs.org" target="_blank">AnalogJS</a> ❤️
      </p>

      <div class="social-media-links">
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

      <p>© 2020-{{ year }} Angular Belgrade</p>
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

      .social-media-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        > a {
          display: flex;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
