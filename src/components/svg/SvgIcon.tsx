import { COLOR } from '../../../constant/color';
import { IconName, IconSet } from './const';

interface IconProps {
  icon: IconName;
  size?: 16 | 20 | 24;
  color?: keyof typeof COLOR;
}

export const SvgIcon = ({ icon, size = 24, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox={IconSet[icon].viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={IconSet[icon].path}
        stroke={COLOR[color as keyof typeof COLOR]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
