import { ReactNode } from 'react';
import classnames from 'classnames';
import { CustomLink } from './CustomLink';
import { SvgIcon } from './svg/SvgIcon';

interface TabProps {
  label?: string;
  description?: string;
  children?: ReactNode;
}

export const Tab = ({ label, description, children, ...props }: TabProps) => {
  return (
    <div className={classnames('tab')} {...props}>
      <div className={classnames('tab__item')}>
        <button className={classnames('tab__btn')}>
          <em className={classnames('tab__label')}>Share team inboxes</em>
          <span className={classnames('tab__desc')}>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </span>
        </button>
        {children}
        <CustomLink
          href="/"
          label="Learn more"
          trailingIcon={<SvgIcon icon="arrowRight" size={20} color="blue500" />}
        />
      </div>
    </div>
  );
};
