import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AgendaSection,
  AgendaSectionItem,
  PlainAgendaItem,
  SpeakerAgendaItem,
} from '../models/agenda.model';
import { speakersResource } from '../resources/speakers.resource';

@Component({
  selector: 'bgd-agenda',
  imports: [RouterLink],
  template: `
    <h2 id="agenda" class="section-title">Agenda</h2>

    <table>
      <tbody>
        @for (agendaItem of agenda; track $index) {
          @if (isSection(agendaItem)) {
            <tr>
              <td class="agenda-section" colspan="2">
                Block {{ agendaItem.index }}: {{ agendaItem.name }}
              </td>
            </tr>
            @for (sectionItem of agendaItem.items; track $index) {
              @if (isSpeaker(sectionItem)) {
                <tr>
                  <td class="agenda-item-time">
                    {{ sectionItem.time.from }} <span>-</span>
                    {{ sectionItem.time.to }}
                  </td>
                  <td class="agenda-item-details">
                    <p>{{ sectionItem.speaker.name }}</p>
                    <a routerLink="/speakers/{{ sectionItem.speaker.id }}">
                      {{ sectionItem.speaker.talkTitle }}
                    </a>
                  </td>
                </tr>
              } @else {
                <tr>
                  <td class="agenda-item-time">
                    {{ sectionItem.time.from }} <span>-</span>
                    {{ sectionItem.time.to }}
                  </td>
                  <td class="agenda-item-details">
                    <span>{{ sectionItem.details }}</span>
                  </td>
                </tr>
              }
            }
            <tr>
              <td class="agenda-section" colspan="2">
                End of Block {{ agendaItem.index }}
              </td>
            </tr>
          } @else {
            <tr>
              <td class="agenda-item-time">
                {{ agendaItem.time.from }} <span>-</span>
                {{ agendaItem.time.to }}
              </td>
              <td class="agenda-item-details">
                <span>{{ agendaItem.details }}</span>
              </td>
            </tr>
          }
        }
      </tbody>
    </table>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--light-orange-color);
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

      .agenda-section {
        font-weight: 600;
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
          width: 740px;
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
  readonly agenda: Array<PlainAgendaItem | AgendaSection> = [
    {
      time: { from: '09:00', to: '10:00' },
      details: 'Registration & Coffee',
    },
    {
      time: { from: '10:00', to: '10:10' },
      details: 'Opening Remarks',
    },
    {
      name: 'General & AI',
      index: 1,
      items: [
        {
          time: { from: '10:10', to: '10:40' },
          speaker: speakersResource.getSpeakerById('pawel-kozlowski'),
        },
        {
          time: { from: '10:40', to: '11:00' },
          speaker: speakersResource.getSpeakerById('christian-liebel'),
        },
        {
          time: { from: '11:00', to: '11:20' },
          speaker: speakersResource.getSpeakerById('mike-ryan'),
        },
        {
          time: { from: '11:20', to: '11:30' },
          speaker: speakersResource.getSpeakerById('ana-kljajic'),
        },
        {
          time: { from: '11:30', to: '11:50' },
          speaker: speakersResource.getSpeakerById('matthieu-riegler'),
        },
        {
          time: { from: '11:50', to: '12:10' },
          details: 'Q&A Panel with Pawel, Christian, Mike, Ana, and Matthieu',
        },
      ],
    },
    {
      time: { from: '12:10', to: '13:30' },
      details: 'Lunch Break',
    },
    {
      name: 'Architecture, State & Testing',
      index: 2,
      items: [
        {
          time: { from: '13:30', to: '13:50' },
          speaker: speakersResource.getSpeakerById('manfred-steyer'),
        },
        {
          time: { from: '13:50', to: '14:10' },
          speaker: speakersResource.getSpeakerById('fabian-gosebrink'),
        },
        {
          time: { from: '14:10', to: '14:30' },
          speaker: speakersResource.getSpeakerById('marko-stanimirovic'),
        },
        {
          time: { from: '14:30', to: '14:40' },
          speaker: speakersResource.getSpeakerById('dhananjay-kumar'),
        },
        {
          time: { from: '14:40', to: '15:00' },
          speaker: speakersResource.getSpeakerById('rainer-hahnekamp'),
        },
        {
          time: { from: '15:00', to: '15:20' },
          details: 'Q&A Panel with Manfred, Fabian, Marko, DJ, and Rainer',
        },
      ],
    },
    {
      time: { from: '15:20', to: '16:00' },
      details: 'Coffee Break',
    },
    {
      name: 'SSR & Performance',
      index: 3,
      items: [
        {
          time: { from: '16:00', to: '16:20' },
          speaker: speakersResource.getSpeakerById('brandon-roberts'),
        },
        {
          time: { from: '16:20', to: '16:40' },
          speaker: speakersResource.getSpeakerById('brygida-fiejdasz'),
        },
        {
          time: { from: '16:40', to: '17:00' },
          speaker: speakersResource.getSpeakerById('dmytro-mezhenskyi'),
        },
        {
          time: { from: '17:00', to: '17:10' },
          speaker: speakersResource.getSpeakerById('kiril-zafirov'),
        },
        {
          time: { from: '17:10', to: '17:30' },
          speaker: speakersResource.getSpeakerById('julian-jandl'),
        },
        {
          time: { from: '17:30', to: '17:50' },
          details: 'Q&A Panel with Brandon, Brygida, Dmytro, Kiril, and Julian',
        },
      ],
    },
    {
      time: { from: '17:50', to: '18:00' },
      details: 'Closing Remarks',
    },
  ];

  isSpeaker(agendaItem: AgendaSectionItem): agendaItem is SpeakerAgendaItem {
    return 'speaker' in agendaItem;
  }

  isSection(item: PlainAgendaItem | AgendaSection): item is AgendaSection {
    return 'name' in item && 'items' in item;
  }
}
