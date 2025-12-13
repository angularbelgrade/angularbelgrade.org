import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-location',
  template: `
    <h2 id="location" class="section-title">Location</h2>

    <div class="location-details">
      <h3>Cineplexx BIG</h3>

      <a
        class="location-address"
        href="https://maps.app.goo.gl/ukRjq1KEbgWXXEzj8"
        target="_blank"
      >
        Višnjička 84, Belgrade, Serbia
      </a>
    </div>

    <div class="gallery">
      <img src="/location/location1.jpg" alt="Location Photo 1" />
      <img src="/location/location2.jpg" alt="Location Photo 2" />
      <img src="/location/location3.jpg" alt="Location Photo 3" />
    </div>
  `,
  styles: [
    `
      :host {
        background-color: var(--lighter-orange-color);
        display: block;
        padding-bottom: 3rem;
        padding-top: 3rem;
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
        color: var(--orange-color);
        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
      }

      .location-address {
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
