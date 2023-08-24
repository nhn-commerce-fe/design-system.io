import classnames from 'classnames';
import { ReactNode } from 'react';

export interface HeaderSectionProps {
  align?: 'center';
  subHeading?: string;
  heading: string;
  text?: string;
  children?: ReactNode;
}

export const HeaderSection = ({ subHeading, heading, text, children, ...props }: HeaderSectionProps) => {
  return (
    <section className={classnames('header-section')} {...props}>
      <>
        <header>
          <p className="header-section__sub-header">{subHeading}</p>
          <h2 className="header-section__header">{heading}</h2>
        </header>
        {text && <p className="header-section__text">{text}</p>}
        {children && children}
      </>
    </section>
  );
};
