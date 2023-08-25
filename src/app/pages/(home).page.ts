import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-home',
  standalone: true,
  template: `
    <div class="banner">
      <img
        alt="Angular Belgrade Logo"
        src="angular-belgrade.svg"
        fetchPriority="high"
        loading="eager"
        height="200"
        width="186.35"
      />
      <h1 class="banner-title">ANGULAR</h1>
      <p class="banner-subtitle">BELGRADE DAY</p>
      <p class="banner-year">2023</p>
    </div>

    <p class="under-construction">Under Construction</p>
  `,
  styles: [
    `
      .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }

      .banner-title {
        color: #d62f39;
        font-size: 6rem;
        font-weight: 800;
        margin-top: 2rem;
        margin-bottom: 0;
        line-height: 0.8;
      }

      .banner-subtitle {
        font-size: 4rem;
        font-weight: 600;
        margin: 0;
      }

      .banner-year {
        background-color: #d62f39;
        font-size: 5rem;
        font-weight: 600;
        margin: 0;
        padding: 0 2rem;
      }

      .under-construction {
        text-align: center;
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
