import { Base } from './base'

export class Event extends Base {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    subscription_start: string;
    subscription_end: string;
    team_id: string;
    min_attendents: number;
}