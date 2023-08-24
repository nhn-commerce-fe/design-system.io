import { ComponentPropsWithoutRef, useState } from 'react';
import classnames from 'classnames';
import { LogoType, Logo } from 'ui/src/components/logo/Logo';
import Dropdown from 'ui/src/components/Dropdown';
import { Button } from 'ui/src/components/button/Button';
import { Icon } from 'ui/src/components/Icon';
import { SvgIcon } from 'ui/src/components/svg/SvgIcon';
import { AllMenu } from './AllMenu';
import { UserMenu } from './UserMenu';
import { MenuItem } from './MenuItem';

type Menu = {
  no: number;
  name: string;
  siteUrl: string;
  parentNo: number;
  depth: number;
  sort: number;
  target: '_self' | '_blank';
  isMobileGnbDisplay: boolean;
  description: string;
  children: Menu[];
};

export interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
  type: LogoType;
  logoLabel: string;
  href: string;
  menus?: Menu[];
  user?: User;
  userLoading?: boolean;

  // @deprecated
  isMobile?: boolean;
}

export const Header = ({ type, logoLabel, href, menus = [], user, userLoading, isMobile, ...props }: HeaderProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const handleMenu = () => {
    setIsToggle((prev) => {
      const nextIsToggle = !prev;

      // 로그인 버튼이 가려져서 임시 주석
      // const classList = document.getElementsByTagName('html')[0].classList;
      // nextIsToggle ? classList.add('is-lock') : classList.remove('is-lock');
      return nextIsToggle;
    });
  };
  const findCurrentPage = menus.map((menu) => menu.siteUrl).find((url) => url === location.href);

  let profile: Profile = { isLogin: false, name: '', isIntegrated: false };
  if (!!user && user.login === 'y') {
    profile = {
      isLogin: true,
      name: user.username,
      isIntegrated: user.isIntegrated,
    };
  }

  return (
    <header className={classnames('header', isToggle && 'is-active')} {...props}>
      <div className="header__left">
        <h1 className="header__logo">
          <Logo type={type} href={href} label={logoLabel} />
        </h1>
        <nav className="gnb">
          <ul className="gnb__list">
            <li className={classnames('gnb__item', { 'is-active': !findCurrentPage })}>
              <Button leadingIcon="homeLine" className="gnb__link" label="샵바이" hierarchy="tertiary-gray" href="." />
            </li>
            {menus
              .filter(({ isMobileGnbDisplay }) => (isMobile ? isMobileGnbDisplay : true))
              .map((menu) => {
                const childrenMenus = menu.children.filter(({ isMobileGnbDisplay }) =>
                  isMobile ? isMobileGnbDisplay : true
                );

                return (
                  <li className={classnames('gnb__item', { 'is-active': menu.siteUrl === findCurrentPage })}>
                    {childrenMenus.length ? (
                      <Dropdown label={menu.name}>
                        <ul>
                          {childrenMenus.map((childrenMenu) => (
                            <li>
                              <MenuItem
                                label={childrenMenu.name}
                                href={childrenMenu.siteUrl}
                                target={childrenMenu.target}
                              />
                            </li>
                          ))}
                        </ul>
                      </Dropdown>
                    ) : (
                      <Button
                        className="gnb__link"
                        label={menu.name}
                        hierarchy="tertiary-gray"
                        href={menu.siteUrl}
                        target={menu.target}
                      />
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
      <div className="header__right">
        {!userLoading && <UserMenu isLoggedIn={profile.isLogin} profile={profile} isMobile={isMobile} />}
        <AllMenu />
      </div>
      <Button
        label="햄버거"
        onClick={handleMenu}
        // leadingIcon={<Icon type={isToggle ? 'x-close' : 'menu-01'} />}
        className="header__hamburger"
        onlyIcon
      />
    </header>
  );
};
