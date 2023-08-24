import { type ComponentProps, createElement, forwardRef } from 'react';
import classnames from 'classnames';
import { SvgIcon } from '../svg/SvgIcon';
import { IconName } from '../svg/const';

export type ButtonTheme =
  | 'primary-red'
  | 'primary-blue'
  | 'tertiary-gray'
  | 'secondary-color'
  | 'secondary-gray'
  | 'tertiary-color'
  | 'link-gray'
  | 'link-color';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ButtonBaseProps extends Omit<ComponentProps<'button'>, 'ref'> {
  href?: string;
  target?: '_self' | '_blank';
}

const ComponentBase = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonBaseProps>(
  ({ href, children, ...props }, ref) => {
    const BaseComponent = href ? 'a' : 'button';
    return createElement(BaseComponent, { href, ref, ...props }, children);
  }
);

export interface ButtonProps extends ButtonBaseProps {
  label: string;
  className?: string;
  fullSized?: boolean;
  hierarchy?: ButtonTheme;
  disabled?: boolean;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  onlyIcon?: boolean;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      leadingIcon,
      trailingIcon,
      onlyIcon = false,
      href,
      label,
      hierarchy,
      disabled,
      className = '',
      fullSized,
      size = 'lg',
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = ['sm', 'md'].includes(size) ? 20 : 24;
    return (
      <ComponentBase
        href={href}
        className={classnames(
          'btn',
          `btn--${size}`,
          hierarchy && `btn--${hierarchy}`,
          fullSized && 'is-full',
          disabled && 'is-disable',
          className
        )}
        {...props}
        ref={ref}
      >
        <>
          {leadingIcon && <SvgIcon icon={leadingIcon} size={iconSize} />}
          {onlyIcon ? <span className="a11y">{label}</span> : <span className="btn__label">{label}</span>}
          {trailingIcon && <SvgIcon icon={trailingIcon} size={iconSize} />}
          {children && children}
        </>
      </ComponentBase>
    );
  }
);
