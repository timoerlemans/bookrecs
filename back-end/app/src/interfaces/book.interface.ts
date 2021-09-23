import { Base } from './base.interface';
import { IRecommendation } from './recommendation.interface';

export interface IBook extends Base {
    authorId: string[];
    partOfSeries: boolean;
    seriesId: string[];
    releaseYear: number;
    released: boolean;
    genreIds: string[];
    pages?: number;
    coverURL?: string;
    goodreadsRating?: number;
    goodreadsLink?: string;
    isbn?: string[];
    publisherId?: string[];
    editor?: string[];
    recommendations?: IRecommendation[];
}
