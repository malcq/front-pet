import { ArticleDetailsCommentsSchema } from './articleDetailsCommentShema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsRecommendationsSchema;
}
