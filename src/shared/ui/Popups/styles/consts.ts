import { DropdownDirection } from '../../../types/ui';
import cls from './popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
  'bottom right': cls.optionsBottomRight,
  'bottom left': cls.optionsBottomLeft,
};
