import { Base } from './base.interface';
import { IRecommendation } from './recommendation.interface';

export interface ISeries extends Base {
    authorId: string | string[];
    numberOfBooks: number;
    bookIds: string[];
    hasSubSeries: boolean;
    subSeries?: string[];
    finished: boolean;
    goodreadsLink?: string;
    relatedSeries?: string[];
    relatedBooks?: string[];
    recommendations?: IRecommendation[];
}
