import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'bgd-event-details',
  standalone: true,
  imports: [DatePipe],
  template: `
    <p class="event-description">{{ eventDescription }}</p>

    <div class="event-links">
      <div class="event-date">
        <img
          alt="Calendar Icon"
          src="/icons/calendar.svg"
          fetchPriority="high"
          loading="eager"
          height="30"
          width="30"
        />
        <span>{{ eventDate | date }}</span>
      </div>

      <div class="event-location">
        <img
          alt="Location Icon"
          src="/icons/location.svg"
          fetchPriority="high"
          loading="eager"
          height="30"
          width="30"
        />
        <a [href]="locationLink" target="_blank">{{ locationName }}</a>
      </div>

      <a class="reserve-button" [href]="registrationLink" target="_blank">
        Reserve Your Spot
      </a>
    </div>

    <p class="event-organization">
      Organized with ❤️ by the community, for the community.
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 2rem 1rem;
        border-bottom: 1px solid #303b57;
      }

      .event-description,
      .event-organization {
        line-height: 1.4;
        margin: 0;
      }

      .event-description {
        text-align: justify;
      }

      .event-organization {
        text-align: center;
      }

      .event-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
      }

      .event-date,
      .event-location {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.25rem;
      }

      .reserve-button {
        background-color: #dd0031;
        color: #fff;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        font-weight: 600;
        text-decoration: none;
      }

      .reserve-button:hover {
        text-decoration: none;
        opacity: 0.9;
        color: white;
      }

      @media only screen and (min-width: 850px) {
        .event-description {
          width: 720px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  @Input({ required: true }) eventDescription!: string;
  @Input({ required: true }) eventDate!: Date;
  @Input({ required: true }) locationName!: string;
  @Input({ required: true }) locationLink!: string;
  @Input({ required: true }) registrationLink!: string;
}
