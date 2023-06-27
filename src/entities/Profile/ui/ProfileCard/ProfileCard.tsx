import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname?: (value: string) => void;
	onChangeLastname?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeAge?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation(['translation', 'profile']);

  if (isLoading) {
    return (
      <HStack justify="center" gap="8" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" gap="8" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          textVariant={TextVariant.ERROR}
          title={t('errorProfile')}
          text={t('tryReloadPage')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };
  return (
    <VStack gap="12" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t('profile:avatar')} />
        </HStack>
      )}
      <Input
        className={cls.input}
        placeholder={t('profile:first')}
        value={data?.first}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.First"
      />
      <Input
        className={cls.input}
        placeholder={t('profile:lastname')}
        value={data?.lastname}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        className={cls.input}
        placeholder={t('profile:age')}
        value={data?.age}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        placeholder={t('profile:city')}
        value={data?.city}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        placeholder={t('profile:username')}
        value={data?.username}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        placeholder={t('profile:avatar')}
        value={data?.avatar}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
