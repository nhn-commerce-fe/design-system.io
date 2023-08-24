import { IconName } from './svg/const';
import { SvgIcon } from './svg/SvgIcon';
import classnames from 'classnames';
import { COLOR } from '../../constant/color';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Theme = 'modern' | 'dark-square' | 'neutral' | 'info' | 'error' | 'warning' | 'success';

interface FeatureIconProps {
  size?: Size;
  icon?: IconName;
  color?: keyof typeof COLOR;
  theme?: Theme;
  isCircle?: boolean;
  className?: string;
}

export const FeatureIcon = ({
  isCircle = false,
  size = 'lg',
  icon = 'user01',
  color = 'gray700',
  theme = 'modern',
  className = '',
  ...props
}: FeatureIconProps) => {
  return (
    <span
      className={classnames(
        'feature-icon',
        `feature-icon--${size}`,
        `feature-icon--${theme}`,
        isCircle ? 'is-circle' : '',
        className
      )}
      {...props}
    >
      <SvgIcon icon={icon} size={24} color={color} />
    </span>
  );
};
