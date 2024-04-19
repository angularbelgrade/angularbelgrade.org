import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AgendaItem, SpeakerAgendaItem } from '../models/agenda-item.model';
import { speakersResource } from '../resources/speakers.resource';

@Component({
  selector: 'bgd-agenda',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <h2 id="agenda" class="section-title">Agenda</h2>

    <table>
      <tbody>
        <tr *ngFor="let agendaItem of agenda">
          <td class="agenda-item-time">
            {{ agendaItem.time.from }} <span>-</span> {{ agendaItem.time.to }}
          </td>
          <td class="agenda-item-details">
            <ng-container *ngIf="isSpeaker(agendaItem)">
              <p>{{ agendaItem.speaker.name }}</p>
              {{ agendaItem.speaker.talkTitle }}
            </ng-container>
            <span *ngIf="!isSpeaker(agendaItem)">{{ agendaItem.details }}</span>
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
        border-bottom: 1px solid var(--border-color);
      }

      table {
        margin: 0 1rem;
        border-collapse: collapse;
      }

      tr:not(:last-child) {
        border-bottom: 1px solid #47424b;
      }

      td {
        padding: 1rem;
      }

      .agenda-item-time {
        border-right: 1px solid #47424b;
        text-align: center;

        > span {
          display: block;
        }
      }

      .agenda-item-details {
        width: 100%;
        line-height: 1.5;

        > p {
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        > span {
          font-weight: 600;
        }
      }

      @media only screen and (min-width: 850px) {
        table {
          width: 720px;
          margin: 0 auto;
        }

        .agenda-item-time {
          white-space: nowrap;

          > span {
            display: inline;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent {
  readonly agenda: AgendaItem[] = [
    {
      time: { from: '08:00', to: '09:30' },
      details: 'Registration & Coffee',
    },
    {
      time: { from: '09:30', to: '09:40' },
      details: 'Opening Remarks',
    },
    {
      time: { from: '09:40', to: '10:10' },
      speaker: speakersResource.getSpeakerById('minko-gechev'),
    },
    {
      time: { from: '10:10', to: '10:35' },
      speaker: speakersResource.getSpeakerById('fabian-gosebrink'),
    },
    {
      time: { from: '10:35', to: '11:00' },
      speaker: speakersResource.getSpeakerById('natalia-venditto'),
    },
    {
      time: { from: '11:00', to: '11:15' },
      details: 'Q&A Panel with Minko, Fabian, and Natalia',
    },
    {
      time: { from: '11:15', to: '11:45' },
      details: 'Coffee Break',
    },
    {
      time: { from: '11:45', to: '11:55' },
      details: 'Company Presentation: Swiss Marketplace Group',
    },
    {
      time: { from: '11:55', to: '12:20' },
      speaker: speakersResource.getSpeakerById('manfred-steyer'),
    },
    {
      time: { from: '12:20', to: '12:45' },
      speaker: speakersResource.getSpeakerById('robin-goetz'),
    },
    {
      time: { from: '12:45', to: '12:55' },
      speaker: speakersResource.getSpeakerById('santosh-yadav'),
    },
    {
      time: { from: '12:55', to: '13:05' },
      speaker: speakersResource.getSpeakerById('igor-ciric'),
    },
    {
      time: { from: '13:05', to: '13:20' },
      details: 'Q&A Panel with Manfred, Robin, Santosh, and Igor',
    },
    {
      time: { from: '13:20', to: '14:35' },
      details: 'Lunch Break',
    },
    {
      time: { from: '14:35', to: '14:40' },
      details: 'Company Presentation: Publicis Sapient',
    },
    {
      time: { from: '14:40', to: '15:05' },
      speaker: speakersResource.getSpeakerById('alex-okrushko'),
    },
    {
      time: { from: '15:05', to: '15:30' },
      speaker: speakersResource.getSpeakerById('chau-tran'),
    },
    {
      time: { from: '15:30', to: '15:40' },
      speaker: speakersResource.getSpeakerById('soumaya-erradi'),
    },
    {
      time: { from: '15:40', to: '15:50' },
      speaker: speakersResource.getSpeakerById('nenad-drobac'),
    },
    {
      time: { from: '15:50', to: '16:05' },
      details: 'Q&A Panel with Alex, Chau, Soumaya, and Nenad',
    },
    {
      time: { from: '16:05', to: '16:35' },
      details: 'Coffee Break',
    },
    {
      time: { from: '16:35', to: '17:00' },
      speaker: speakersResource.getSpeakerById('michael-hladky'),
    },
    {
      time: { from: '17:00', to: '17:25' },
      speaker: speakersResource.getSpeakerById('rainer-hahnekamp'),
    },
    {
      time: { from: '17:25', to: '17:55' },
      speaker: speakersResource.getSpeakerById('mike-ryan'),
    },
    {
      time: { from: '17:55', to: '18:10' },
      details: 'Q&A Panel with Michael, Rainer, and Mike',
    },
    {
      time: { from: '18:10', to: '18:20' },
      details: 'Closing Remarks',
    },
  ];

  isSpeaker(agendaItem: AgendaItem): agendaItem is SpeakerAgendaItem {
    return 'speaker' in agendaItem;
  }
}
