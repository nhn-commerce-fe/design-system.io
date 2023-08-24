import classnames from 'classnames';
import { FeatureIcon } from './FeatureIcon';
import { IconName } from './svg/const';

export interface StepBaseProps {
  icon: IconName;
  title: string;
  text: string;
}

export const StepBase = ({ icon, title, text }: StepBaseProps) => {
  return (
    <span className={classnames('step')}>
      <span className="step__icon-wrap">
        <FeatureIcon icon={icon} className="step__icon" />
      </span>
      <span className="step__content">
        <em className="step__tit">{title}</em>
        <span className="step__desc">{text}</span>
      </span>
    </span>
  );
};
