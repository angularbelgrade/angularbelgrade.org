import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-location',
  standalone: true,
  template: `
    <h2 id="location" class="section-title">Location</h2>

    <h3>Hotel Mona Plaza</h3>

    <a
      class="location-address"
      href="https://maps.app.goo.gl/RG3DihiaRCDpEMQK6"
      target="_blank"
    >
      Cara Uroša 62-64, Belgrade, Serbia
    </a>

    <div class="gallery">
      <img src="/location/mona1.jpg" loading="lazy" />
      <img src="/location/mona2.jpg" loading="lazy" />
      <img src="/location/mona3.jpg" loading="lazy" />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #232125;
      }

      h3 {
        text-align: center;
        font-size: 1.25rem;
      }

      .location-address {
        display: block;
        text-align: center;
        margin-bottom: 2rem;
        padding: 0 1rem;
      }

      .gallery {
        margin: 0 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        > img {
          width: 100%;
          max-width: 400px;
          height: auto;
        }
      }

      @media only screen and (min-width: 850px) {
        h3 {
          font-size: 1.5rem;
        }

        .location-address {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {}
