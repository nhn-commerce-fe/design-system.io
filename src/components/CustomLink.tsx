import { type ComponentProps, forwardRef } from 'react';

export interface AnchorProps extends Omit<ComponentProps<'a'>, 'ref'> {
  label?: string;
  leadingIcon?: JSX.Element | JSX.Element[];
  trailingIcon?: JSX.Element | JSX.Element[];
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hierarchy?: 'link-gray' | 'link-color';
  disable?: boolean;
}

export const CustomLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      href,
      disable = false,
      hierarchy = 'link-gray',
      className = '',
      label = '',
      leadingIcon,
      size = 'md',
      trailingIcon,
      ...props
    },
    ref
  ) => {
    return (
      <a
        href={href}
        className={`link link--${size} link--${hierarchy} ${disable ? 'is-disable' : ''} ${className}`}
        {...props}
        ref={ref}
      >
        {leadingIcon && <span className="link__icon">{leadingIcon}</span>}
        {label && <span className="link__label">{label}</span>}
        {trailingIcon && <span className="link__icon">{trailingIcon}</span>}
      </a>
    );
  }
);
