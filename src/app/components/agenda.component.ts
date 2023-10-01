import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AgendaItem } from '../models/agenda-item';

@Component({
  selector: 'bgd-agenda',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <h2 id="agenda" class="section-title">Agenda</h2>

    <table>
      <tbody>
        <tr *ngFor="let agendaItem of agenda">
          <td class="agenda-item-time">{{ agendaItem.time }}</td>
          <td class="agenda-item-details">
            <p *ngIf="agendaItem.title">{{ agendaItem.title }}</p>
            {{ agendaItem.details }}
          </td>
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

      .agenda-item-time {
        border-right: 1px solid #303b57;
        width: 100px;
        text-align: center;
      }

      .agenda-item-details {
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
export class AgendaComponent {
  @Input({ required: true }) agenda: AgendaItem[] = [];
}
