import classNames from 'classnames';
import { COLOR } from '../../../constant/color';
import { Size } from '../../../constant/size';
import { SvgIcon } from '../svg/SvgIcon';
import { Badge, BadgeProps, BADGE_COLOR } from './Badge';

interface BadgeGroupProps extends Omit<BadgeProps, 'size' | 'icon'> {
  href?: string;
  size?: Omit<Size, 'sm'>;
  // leading?: Omit<BadgeProps, 'className' | 'size' | 'color' | 'type'>;
  leading?: Pick<BadgeProps, 'label' | 'type' | 'onlyOutline' | 'icon'>;
  trailing?: {
    href: string;
    label: string;
  };
}

export const BadgeGroup = ({
  href,
  leading,
  color = 'violet',
  type = 'pill',
  trailing,
  size = 'md',
  label,
  className,
  ...props
}: BadgeGroupProps) => {
  return (
    <span
      className={classNames(
        'badge-group',
        `badge-group--${color}`,
        `badge-group--${type}`,
        `badge-group--${size}`,
        className
      )}
      {...props}
    >
      {leading && (
        <Badge
          label={leading.label}
          type={type}
          size="sm"
          color={color}
          icon={leading.icon}
          onlyOutline={leading.onlyOutline}
        />
      )}
      {!trailing && (
        <a className="badge-group__link" href={href}>
          <span>{label} </span>
          <SvgIcon icon="arrowRight" size={16} color={`${BADGE_COLOR[color] || color}600` as keyof typeof COLOR} />
        </a>
      )}
      {trailing && (
        <a href={trailing.href}>
          <Badge label={trailing.label} type={type} size="sm" color={color} icon="arrowRight" />
        </a>
      )}
    </span>
  );
};
