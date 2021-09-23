import { Base } from './base.interface';

export enum RecommendationType {
    BOOK,
    SERIES,
    AUTHOR
}

export interface IRecommendation extends Base {
    type: RecommendationType
}
