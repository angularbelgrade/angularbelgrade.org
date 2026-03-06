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
    <div class="agenda">
      @for (agendaItem of agenda; track $index) {
        @if (isSection(agendaItem)) {
          <h2 class="block-title">
            Block {{ agendaItem.index }}: {{ agendaItem.name }}
          </h2>

          @for (sectionItem of agendaItem.items; track $index) {
            @if (isSpeaker(sectionItem)) {
              <section class="event-card">
                <div class="time-col">
                  {{ sectionItem.time.from }} - {{ sectionItem.time.to }}
                </div>
                <div class="content-col">
                  <h3 class="title orange">{{ sectionItem.speaker.name }}</h3>
                  <p class="subtitle">
                    <a routerLink="/speakers/{{ sectionItem.speaker.id }}">{{
                      sectionItem.speaker.talkTitle
                    }}</a>
                  </p>
                </div>
              </section>
            } @else {
              <section class="event-card align-center">
                <div class="time-col">
                  {{ sectionItem.time.from }} - {{ sectionItem.time.to }}
                </div>
                <div class="content-col">
                  <h3 class="title orange">{{ sectionItem.details }}</h3>
                </div>
              </section>
            }
          }
        } @else {
          <section class="event-card purple">
            <div class="time-col">
              {{ agendaItem.time.from }} - {{ agendaItem.time.to }}
            </div>
            <div class="content-col">
              <h3 class="title purple">{{ agendaItem.details }}</h3>
            </div>
          </section>
        }
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--light-orange-color);

        .agenda {
          width: min(100%, 860px);
          margin: 56px auto 0 auto;
          padding: 0 18px 44px;

          .block-title {
            margin: 20px 0 20px;
            font-size: 16px;
            line-height: 1.1;
            font-weight: 800;
            letter-spacing: -0.02em;
          }

          .event-card {
            position: relative;
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 28px;
            background: white;
            border-radius: 0;
            margin-bottom: 8px;
            padding: 12px 20px 12px 18px;
            min-height: 72px;
            border-left: 8px solid var(--orange-color);

            &.purple {
              border-left-color: var(--magenta-color);
              align-items: center;

              .time-col {
                display: flex;
                align-items: center;
                line-height: 1.2;
                &::after {
                  top: -12px;
                  height: calc(100% + 24px);
                }
              }

              .content-col {
                justify-content: center;
                gap: 0;
              }
            }

            &.align-center {
              align-items: center;

              .time-col {
                display: flex;
                align-items: center;
                line-height: 1.2;
                &::after {
                  top: -12px;
                  height: calc(100% + 24px);
                }
              }

              .content-col {
                justify-content: center;
                gap: 0;
              }
            }

            .time-col {
              position: relative;
              padding-left: 12px;
              font-size: 16px;
              line-height: 1.35;
              font-weight: 500;
              letter-spacing: -0.01em;
              color: var(--gray-color);

              &::after {
                content: '';
                position: absolute;
                right: -14px;
                top: 0;
                width: 1px;
                height: 100%;
                background: var(--light-gray-color);
              }
            }

            .content-col {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 8px;
              padding-right: 8px;
            }

            .title {
              margin: 0;
              font-size: 16px;
              line-height: 1.12;
              font-weight: 700;
              letter-spacing: -0.01em;

              &.orange {
                color: var(--orange-color);
              }
              &.purple {
                color: var(--magenta-color);
              }
            }

            .subtitle {
              margin: 0;
              font-size: 16px;
              line-height: 1.2;
              font-weight: 500;
              text-decoration: underline;
              text-underline-offset: 2px;
              color: var(--gray-color);
              letter-spacing: -0.005em;

              &.no-underline {
                text-decoration: none;
              }
            }
          }

          .group-gap {
            height: 30px;
          }

          @media (max-width: 900px) {
            margin: 28px auto 0 auto;

            .event-card {
              grid-template-columns: 1fr;
              gap: 14px;
              padding: 10px 14px;
              min-height: 0;

              .time-col {
                font-size: 16px;
                padding-left: 0;
                &::after {
                  display: none;
                }
              }

              .title {
                font-size: 16px;
              }

              .subtitle {
                font-size: 16px;
              }
            }

            .block-title {
              font-size: 16px;
            }
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
          speaker: speakersResource.getSpeakerById('marko-stanimirovic'),
        },
        {
          time: { from: '14:10', to: '14:30' },
          speaker: speakersResource.getSpeakerById('fabian-gosebrink'),
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
          details: 'Q&A Panel with Manfred, Marko, Fabian, DJ, and Rainer',
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
