import { Speaker } from './speaker.model';

type BaseAgendaItem = { time: { from: string; to: string } };

export type SpeakerAgendaItem = BaseAgendaItem & { speaker: Speaker };

export type PlainAgendaItem = BaseAgendaItem & { details: string };

export type AgendaItem = SpeakerAgendaItem | PlainAgendaItem;
