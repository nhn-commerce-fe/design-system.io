import { PropsWithChildren } from 'react';
import classnames from 'classnames';
import { FeatureIcon } from './FeatureIcon';
import { Icons } from 'const/Icon';
export interface MediaProps {
  reverse?: boolean;
  title?: string;
  contents?: string;
  icon?: (typeof Icons)[number];
  image?: string;
}

const Media = ({ reverse = false, title, contents, icon, image, children }: PropsWithChildren<MediaProps>) => {
  return (
    <div className={classnames('media', { 'media--reverse': reverse })}>
      <div className="media__content">
        {icon && <FeatureIcon theme="neutral" isCircle icon={icon} className="media__icon" />}
        <p className="media__title">{title}</p>
        {contents && <p className="media__text">{contents}</p>}
        {children}
      </div>
      <div className="media__img">
        <img src={image} alt="media" />
      </div>
    </div>
  );
};

export default Media;
