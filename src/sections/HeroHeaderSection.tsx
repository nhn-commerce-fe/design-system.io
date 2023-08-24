import { SplitImage } from './hero/SplitImage';

export interface HeroHeaderSectionProps {
  type: 'SplitImage01';
}

export const HeroHeaderSection = ({ type, ...props }: HeroHeaderSectionProps) => {
  if (type === 'SplitImage01') return <SplitImage {...props} />;

  return null;
};
