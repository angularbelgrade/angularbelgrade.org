export type TicketStyles = {
  card: string;
  badge: string;
  button: string;
  banner: string;
};

export type Ticket = {
  name: string;
  price: number;
  basePrice?: number;
  note?: string;
  benefits: string[];
  styles: TicketStyles;
  state: 'ACTIVE' | 'SOLD OUT' | 'LOCKED';
};
