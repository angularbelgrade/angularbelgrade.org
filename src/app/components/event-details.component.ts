import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bgd-event-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="event">
      <div class="event-register">
        <button class="register-button">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScoWYDjd8T4aVF8z91WCoHjxQ0NtVA_PridxFBF9zDFkDiPpw/viewform?pli=1"
            target="_blank"
          >
            Register here
          </a>
        </button>
      </div>
      <div class="event-details">
        <p class="event-date">
          <i class="fas fa-calendar"></i>November 4, 2023
        </p>
        <p class="event-location">
          <i class="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.com/maps/place/Startit+Centar+Beograd/@44.8069241,20.4555015,15z/data=!4m6!3m5!1s0x475a7aaa0756e81f:0x1e47be2a38dbf0ee!8m2!3d44.8069241!4d20.4555015!16s%2Fg%2F11bwkhl8xs?entry=ttu"
            target="_blank"
          >
            Startit Centar, Belgrade
          </a>
        </p>
        <p class="event-time"><i class="fas fa-clock"></i>11 AM</p>
      </div>
    </div>
  `,
  styles: [
    `
      .event {
        background: #2b3248;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }

      .event-register {
        display: flex;
        justify-content: center;
        margin: 2rem;
      }

      .register-button {
        background-color: #d62f39;
        border: none;
        padding: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background-color 0.5s;
      }

      .register-button:hover {
        background-color: rgba(214, 47, 57, 0.8);
      }

      .event-details {
        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }

      .register-button a,
      .event-details a {
        text-decoration: none;
      }

      .event-date,
      .event-location,
      .event-time {
        margin: 0 1rem;
      }

      .event-details i {
        margin-right: 10px;
        color: #d62f39;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {}
