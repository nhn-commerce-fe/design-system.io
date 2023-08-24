import { StepBase, StepBaseProps } from 'ui/src/components/StepBase';
import classNames from 'classnames';

interface ProgressSectionProps {
  steps?: StepBaseProps[];
}

export const ProgressSection = ({ steps = [] }: ProgressSectionProps) => {
  return (
    <section className={classNames('progress-section')}>
      <ul className="progress-steps">
        {steps.map(({ icon, title, text }) => (
          <li className="progress-steps__item">
            <StepBase icon={icon} title={title} text={text} />
          </li>
        ))}
      </ul>
    </section>
  );
};
