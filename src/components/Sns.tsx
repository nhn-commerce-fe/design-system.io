import { ComponentPropsWithoutRef } from 'react';

export type SnsProps = ComponentPropsWithoutRef<'a'> & {
  label: string;
  type: 'twitter' | 'linkedin' | 'facebook' | 'github' | 'angellist' | 'dribble' | 'naver' | 'youtube' | 'instagram';
};

export const Sns = ({ type, label, ...props }: SnsProps) => {
  return (
    <a className={`sns ${type ? `sns--${type}` : ''}`} {...props}>
      <span className="a11y">{label}</span>
    </a>
  );
};
