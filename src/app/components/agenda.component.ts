import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-agenda',
  standalone: true,
  template: `
    <h2 id="agenda" class="section-title">Agenda</h2>

    <table>
      <tbody>
        <tr>
          <td class="agenda-time">10:00 AM</td>
          <td class="agenda-event">Registration & Coffee</td>
        </tr>
        <tr>
          <td class="agenda-time">11:15 AM</td>
          <td class="agenda-event">Opening Remarks</td>
        </tr>
        <tr>
          <td class="agenda-time">11:20 AM</td>
          <td class="agenda-event">
            <p>Marko Stanimirović</p>
            NgRx SignalStore - Journey from Vision to First Release
          </td>
        </tr>
        <tr>
          <td class="agenda-time">11:50 AM</td>
          <td class="agenda-event">
            <p>Manfred Steyer</p>
            How will Signals influence your Architecture?
          </td>
        </tr>
        <tr>
          <td class="agenda-time">12:35 PM</td>
          <td class="agenda-event">Lunch Break</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }

      table {
        margin: 0 1rem;
        border-collapse: collapse;
      }

      tr:not(:last-child) {
        border-bottom: 1px solid #303b57;
      }

      td {
        padding: 1rem;
      }

      .agenda-time {
        border-right: 1px solid #303b57;
        width: 100px;
        text-align: center;
      }

      .agenda-event {
        width: 100%;

        > p {
          margin: 0 0 1rem 0;
          font-weight: 600;
        }
      }

      @media only screen and (min-width: 850px) {
        table {
          width: 720px;
          margin: 0 auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent {}
