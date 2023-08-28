import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'bgd-banner',
  standalone: true,
  template: `
    <img
      alt="Angular Belgrade Logo"
      src="/angular-belgrade.svg"
      class="banner-logo"
      fetchPriority="high"
      loading="eager"
      height="150"
      width="140"
    />

    <h1 class="banner-title">ANGULAR</h1>
    <p class="banner-subtitle">BELGRADE DAY</p>
    <p class="banner-year">{{ year }}</p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        border-bottom: 1px solid #303b57;
        background: linear-gradient(to top, #171a29, #0e101c);
      }

      .banner-title {
        color: #d62f39;
        font-size: 3.25rem;
        font-weight: 800;
        margin-top: 2rem;
        margin-bottom: 0;
        line-height: 0.8;
      }

      .banner-subtitle {
        font-size: 2.1rem;
        font-weight: 600;
        margin: 0 0 0.2rem 0;
        text-align: center;
      }

      .banner-year {
        background-color: #d62f39;
        font-size: 2.75rem;
        font-weight: 600;
        margin: 0;
        padding: 0 2rem;
      }

      @media only screen and (min-width: 850px) {
        :host {
          padding: 4rem 0;
        }

        .banner-logo {
          height: 200px;
          width: 186px;
        }

        .banner-title {
          font-size: 6rem;
        }

        .banner-subtitle {
          font-size: 4rem;
        }

        .banner-year {
          font-size: 5rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  @Input({ required: true }) year!: number;
}
