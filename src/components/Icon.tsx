import { forwardRef } from 'react';

interface IconProps {
  type:
    | 'menu-01'
    | 'x-close'
    | 'arrow-narrow-up-right'
    | 'dot-grid'
    | 'mark-isms'
    | 'arrow-narrow-right'
    | 'message-smile-square'
    | 'align-top-01'
    | 'ico-m-sm';
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ type }, ref) => {
  return <span className={`ico ico--${type}`} ref={ref}></span>;
});
