import { Ticket, TicketStyles } from '../models/ticket.model';

function getTicketStyles(color: string): TicketStyles {
  return {
    card: `border: 2px solid ${color}; box-shadow: 0 0 14px 0 ${color}`,
    badge: `background-color: ${color}`,
    button: `background-color: ${color}`,
    banner: `color: ${color}; border-color: ${color}`,
  };
}

const conferenceTicketBenefits = [
  'In-person access to the Conference Day on <b>May 7</b>',
  'Early access to talk recordings',
  'Personalized badge',
  'Gift bag',
  'Coffee breaks with free drinks',
  'Lunch',
];

const vipTicketBenefits = [
  'In-person access to the Conference Day on <b>May 7</b>',
  'Everything included in the regular conference ticket',
  'Personalized VIP badge with photo',
  'Premium swag',
  'Priority registration',
];

const workshopTicketBenefits = [
  'In-person access to the Workshop Day on <b>May 8</b>',
  'Certificate of completion',
  'Coffee breaks with free drinks',
  'Lunch',
];

const tickets: Ticket[] = [
  {
    name: 'Early Conference Ticket',
    price: 119,
    basePrice: 159,
    benefits: conferenceTicketBenefits,
    styles: getTicketStyles('#ef4444'),
    note: 'Until Jan 31',
    soldOut: false,
  },
  {
    name: 'VIP Conference Ticket',
    price: 229,
    benefits: vipTicketBenefits,
    styles: getTicketStyles('#a855f7'),
    note: '30 Seats Available',
    soldOut: false,
  },
  {
    name: 'Workshop Ticket',
    price: 299,
    benefits: workshopTicketBenefits,
    styles: getTicketStyles('#40a2d8'),
    note: '30 Seats Available',
    soldOut: false,
  },
];

const buyTicketsLink =
  'https://www.entrio.hr/en/event/ng-belgrade-conf-2026-28758';

export const ticketsResource = { tickets, buyTicketsLink };
