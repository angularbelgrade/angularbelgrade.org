import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'bgd-event-details',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="event-date">
      <img
        src="/icons/calendar.svg"
        fetchPriority="high"
        loading="eager"
        height="30px"
      />
      <span>{{ eventDate | date }}</span>
    </div>

    <div class="event-location">
      <img
        src="/icons/location.svg"
        fetchPriority="high"
        loading="eager"
        height="30px"
      />
      <a [href]="locationLink" target="_blank">Belgrade, Serbia</a>
    </div>

    <a class="reserve-button" [href]="registrationLink" target="_blank">
      Reserve Your Spot
    </a>
  `,
  styles: [
    `
      :host {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        border-bottom: 1px solid #303b57;
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
        background-color: #d62f39;
        color: #fff;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        text-decoration: none;
      }

      .reserve-button:hover {
        text-decoration: none;
        opacity: 0.9;
        color: white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  @Input({ required: true }) eventDate!: Date;
  @Input({ required: true }) locationLink!: string;
  @Input({ required: true }) registrationLink!: string;
}
