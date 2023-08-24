import { Logo } from 'ui/src/components/logo/Logo';
import { useState } from 'react';
import { Button } from 'ui/src/components/button/Button';
import { Icon } from 'ui/src/components/Icon';
import { AllMenu } from './AllMenu';
import { UserMenu } from './UserMenu';
import { HeaderProps } from './Header';
import classNames from 'classnames';

type HeaderSimpleProps = Omit<HeaderProps, 'menus'> & {
  isSimple?: boolean;
};

export const HeaderSimple = ({
  isSimple,
  type,
  logoLabel,
  href,
  user,
  userLoading,
  isMobile,
  ...props
}: HeaderSimpleProps) => {
  const [isToggle, setIsToggle] = useState(false);

  let profile: Profile = { isLogin: false, name: '', isIntegrated: false };
  if (!!user && user.login === 'y') {
    profile = {
      isLogin: true,
      name: user.username,
      isIntegrated: user.isIntegrated,
    };
  }

  const handleMenu = () => setIsToggle((prev) => !prev);
  return (
    <header className={classNames('header', isToggle && 'is-active', isSimple && 'header--simple')} {...props}>
      <div className="header__left">
        <h1>
          <Logo type={type} href={href} label={logoLabel} />
        </h1>
      </div>
      <div className="header__right">
        {!userLoading && (
          <UserMenu isSimple={true} isLoggedIn={profile.isLogin} profile={profile} isMobile={isMobile} />
        )}
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
