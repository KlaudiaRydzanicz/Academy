import {Rate} from './rate';

export interface Currency {
date: Date;
rates: Rate[];
base: string;
}
