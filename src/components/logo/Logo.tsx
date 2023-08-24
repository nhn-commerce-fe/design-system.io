import classNames from 'classnames';
import { forwardRef } from 'react';

export type LogoType = 'commerce' | 'devcenter' | 'marketing' | 'plusshop' | 'shopby' | 'store' | 'workspace';

export interface LogoProps {
  type: LogoType;
  label?: string;
  onlyMobile?: boolean;
  href?: string;
  hierarchy?: 'black' | 'white';
  className?: string;
}

export const Logo = forwardRef<HTMLSpanElement, LogoProps>(
  ({ href, type, label, className, hierarchy = 'black', onlyMobile = false, ...props }, ref) => {
    return (
      <span {...props} className={classNames('logo', className)} ref={ref as never}>
        <a
          className={`logo__anchor logo__root-${hierarchy} ${onlyMobile ? 'is-mobile' : ''}`}
          href={`https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}`}
        >
          <span className="a11y">nhn commerce 홈으로 이동</span>
        </a>
        {type && !onlyMobile && (
          <a className={`logo__anchor logo__${type}`} href=".">
            <span className="a11y">{label}</span>
          </a>
        )}
      </span>
    );
  }
);
