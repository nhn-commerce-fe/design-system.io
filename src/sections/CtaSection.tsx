import { Button } from 'ui/src/components/button/Button';
import classnames from 'classnames';
import { ReactNode } from 'react';

interface CtaSectionProps {
  type?: 'simple-centered';
  children?: ReactNode;
  title: string;
  description?: string;
  buttonLabel: string;
}

export const CtaSection = ({
  type = 'simple-centered',
  title,
  description,
  buttonLabel,
  children,
  ...props
}: CtaSectionProps) => {
  return (
    <section className={classnames('cta-section', type)} {...props}>
      <h2 className="cta-section__title">{title}</h2>
      <p className="cta-section__desc">{description}</p>
      <div className="cta-section__content">
        <Button label={buttonLabel} size="xl" hierarchy="primary-red" />
      </div>
    </section>
  );
};
