import classnames from 'classnames';
import { COLOR } from '../../../constant/color';
import { Size } from '../../../constant/size';
import { SvgIcon } from '../svg/SvgIcon';

// TODO: modern type 추가 하기

type BadgeColor = 'gray' | 'error' | 'warning' | 'success' | 'pink' | 'info' | 'yellow' | 'violet';

export interface BadgeProps {
  className?: string;
  color?: BadgeColor;
  label: string;
  type?: 'pill' | 'badge';
  onlyOutline?: boolean;
  size?: Omit<Size, 'xl' | '2xl'>;
  icon?: 'dot' | 'x' | 'arrowRight' | false;
}

export const BADGE_COLOR: { [key: string]: 'blue' | 'green' | 'orange' | 'red' } = {
  info: 'blue',
  success: 'green',
  warning: 'orange',
  error: 'red',
};

export const Badge = ({
  icon,
  size = 'md',
  type = 'pill',
  onlyOutline = false,
  className,
  color = 'violet',
  label,
}: BadgeProps) => {
  const svgColor = `${BADGE_COLOR[color] || color}600` as keyof typeof COLOR;

  return (
    <span
      className={classnames(
        'badge',
        `badge--${color}`,
        `badge--${size}`,
        `badge--${type}`,
        onlyOutline ? `badge--outline` : '',
        icon === 'dot' ? 'badge--dot' : '',
        label,
        className
      )}
    >
      <span className="badge__label">{label}</span>
      {icon === 'x' && <SvgIcon icon="xClose" size={16} color={svgColor} />}
      {icon === 'arrowRight' && <SvgIcon icon="arrowRight" size={16} color={svgColor} />}
    </span>
  );
};
