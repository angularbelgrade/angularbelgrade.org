import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-venue',
  standalone: true,
  template: `
    <h2 id="venue" class="section-title">Venue</h2>

    <div class="venue-details">
      <h3>Mona Plaza Hotel</h3>

      <a
        class="venue-address"
        href="https://maps.app.goo.gl/RG3DihiaRCDpEMQK6"
        target="_blank"
      >
        Cara Uroša 62-64, Belgrade, Serbia
      </a>
    </div>

    <div class="gallery">
      <img src="/venue/mona1.jpg" loading="lazy" alt="Mona Plaza Photo 1" />
      <img src="/venue/mona2.jpg" loading="lazy" alt="Mona Plaza Photo 2" />
      <img src="/venue/mona3.jpg" loading="lazy" alt="Mona Plaza Photo 3" />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
      }

      .venue-details {
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
        font-weight: 600;
        margin: 0;
      }

      .venue-address {
        text-align: center;
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
        border-radius: 0.5rem;
      }

      @media only screen and (min-width: 850px) {
        h3 {
          font-size: 1.5rem;
        }

        .venue-address {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenueComponent {}
