import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';

interface <FTName | capitalize>Props {
	className?: string;
}

export const <FTName | capitalize> = memo(({ className }: <FTName | capitalize>Props) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.<FTName | capitalize>, {}, [className])}>

		</div>
)
})