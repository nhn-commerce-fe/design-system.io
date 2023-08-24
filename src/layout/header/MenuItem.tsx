import { SvgIcon } from 'ui/src/components/svg/SvgIcon';
import { ComponentProps } from 'react';

interface MenuItemProps extends ComponentProps<'a'> {
  icon?: boolean;
  badge?: boolean;
  text?: string;
  more?: boolean;
  outLink?: boolean;
  label: string;
  href: string;
}

export const MenuItem = ({ href, icon, badge, text, more, outLink, label, ...props }: MenuItemProps) => {
  return (
    <a className="menu-item" href={href} {...props}>
      <p className="menu-item__top">
        <em className="menu-item__label">{label}</em>
        {badge && <span>badge</span>}
        {outLink && <SvgIcon icon="arrowUpRight" size={20} color="gray300" />}
      </p>
      {text && <div className="menu-item__text" dangerouslySetInnerHTML={{ __html: text }}></div>}
      {more && (
        <span className="menu-item__more">
          더보기 <SvgIcon icon="arrowRight" size={20} color="blue500" />
        </span>
      )}
    </a>
  );
};
