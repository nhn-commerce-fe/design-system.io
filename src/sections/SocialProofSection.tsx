import classNames from 'classnames';

interface SocialImage {
  image: string;
}

interface SocialProofSectionProps {
  title?: string;
  socialImages?: SocialImage[];
}

export const SocialProofSection = ({ title, socialImages = [] }: SocialProofSectionProps) => {
  return (
    <section className={classNames('section-wrap', 'social-proof')}>
      {title && <h2 className="social-proof__tit">{title}</h2>}
      <ul className="social-proof__list">
        {socialImages.map(({ image }, index) => (
          <li className="social-proof__item" key={index}>
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};
