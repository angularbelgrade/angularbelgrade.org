import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-location',
  standalone: true,
  template: `
    <h2 id="location" class="section-title">Location</h2>

    <div class="location-details">
      <h3>Mona Plaza Hotel</h3>

      <a
        class="location-address"
        href="https://maps.app.goo.gl/RG3DihiaRCDpEMQK6"
        target="_blank"
      >
        Cara Uroša 62-64, Belgrade, Serbia
      </a>
    </div>

    <div class="gallery">
      <img src="/location/mona1.jpg" loading="lazy" alt="Mona Plaza Photo 1" />
      <img src="/location/mona2.jpg" loading="lazy" alt="Mona Plaza Photo 2" />
      <img src="/location/mona3.jpg" loading="lazy" alt="Mona Plaza Photo 3" />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #232125;
      }

      .location-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
      }

      h3 {
        text-align: center;
        font-size: 1.25rem;
        margin: 0;
      }

      .gallery {
        margin: 0 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .gallery > img {
        width: 100%;
        max-width: 400px;
        height: auto;
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
