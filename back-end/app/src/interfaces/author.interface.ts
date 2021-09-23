import { Base } from './base.interface';
import { IRecommendation } from './recommendation.interface';

export interface IAuthor extends Base {
    bookIds: string[];
    seriesIds: string[];
    goodreadsLink?: string;
    photoURL?: string;
    biography?: string;
    birthDate?: string;
    deathDate?: string;
    birthPlace?: string;
    currentResidence?: string;
    notes?: string;
    recommendations?: IRecommendation[];
}
