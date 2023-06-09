// <Адрес странцыб позиция скролла
export type ScrollSchema = Record<string, number>;

export interface UISchema {
	scroll: {
		[key:string]:number
	};
}
