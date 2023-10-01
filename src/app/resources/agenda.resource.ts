import { AgendaItem } from '../models/agenda-item';
import { getSpeakerById } from './speakers.resource';

export const agendas: Record<number, AgendaItem[]> = {
  2023: [
    {
      time: '10:00 AM',
      details: 'Registration & Coffee',
    },
    {
      time: '11:00 AM',
      details: 'Opening Remarks',
    },
    {
      time: '11:10 AM',
      title: getSpeakerById('2023-marko')!.name,
      details: getSpeakerById('2023-marko')!.talkTitle,
    },
    {
      time: '11:40 AM',
      title: getSpeakerById('2023-manfred')!.name,
      details: getSpeakerById('2023-manfred')!.talkTitle,
    },
    {
      time: '12:10 PM',
      details: 'Lunch Break',
    },
    {
      time: '1:30 PM',
      title: getSpeakerById('2023-alex')!.name,
      details: getSpeakerById('2023-alex')!.talkTitle,
    },
    {
      time: '2:00 PM',
      title: getSpeakerById('2023-mateusz')!.name,
      details: getSpeakerById('2023-mateusz')!.talkTitle,
    },
    {
      time: '2:30 PM',
      title: getSpeakerById('2023-ana')!.name,
      details: getSpeakerById('2023-ana')!.talkTitle,
    },
    {
      time: '2:45 PM',
      details: 'Coffee Break',
    },
    {
      time: '3:15 PM',
      title: getSpeakerById('2023-mladen')!.name,
      details: getSpeakerById('2023-mladen')!.talkTitle,
    },
    {
      time: '3:45 PM',
      title: getSpeakerById('2023-nenad')!.name,
      details: getSpeakerById('2023-nenad')!.talkTitle,
    },
    {
      time: '4:15 PM',
      details: 'Break',
    },
    {
      time: '4:30 PM',
      details: 'Q&A Panel with Speakers',
    },
    {
      time: '5:00 PM',
      details: 'Closing Remarks',
    },
  ],
};

export function getAgendaByYear(year: number): AgendaItem[] {
  return agendas[year];
}
