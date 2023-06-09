import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './articleDetailsCommentShema';

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsRecommendationsSchema;
}
