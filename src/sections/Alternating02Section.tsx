import { CustomLink } from '../components/CustomLink';
import Media, { MediaProps } from '../components/Media';
import { SvgIcon } from '../components/svg/SvgIcon';
import classnames from 'classnames';

export type MediaType = MediaProps & {
  linkLabel?: string;
  link?: string;
};

export interface FeaturesSectionProps {
  type: 'alternating-02-section';
  medias: MediaType[];
}

export const FeaturesSection = ({ type = 'alternating-02-section', medias = [] }: FeaturesSectionProps) => {
  return (
    <section className={classnames(type)}>
      {medias.map(({ icon, title, contents, image, linkLabel, link, reverse }, index) => (
        <Media icon={icon} title={title} contents={contents} image={image} reverse={reverse} key={index}>
          <CustomLink
            label={linkLabel}
            href={link}
            hierarchy="link-color"
            trailingIcon={linkLabel ? <SvgIcon icon="arrowRight" size={20} color="blue500" /> : undefined}
          />
        </Media>
      ))}
    </section>
  );
};
