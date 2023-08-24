import { Button } from '../../components/button/Button';
import { CustomLink } from '../../components/CustomLink';
import Dropdown from '../../components/Dropdown';
import { SvgIcon } from '../../components/svg/SvgIcon';

interface UserMenuProps {
  isSimple?: boolean;
  profile?: Profile;
  isLoggedIn: boolean;

  // @deprecated
  isMobile?: boolean;
}

export const UserMenu = ({ isSimple = false, isLoggedIn = false, profile, isMobile }: UserMenuProps) => {
  const COMMERCE_DOMAIN = `https://${
    isMobile ? process.env.NEXT_PUBLIC_DOMAIN_M_COMMERCE : process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE
  }`;

  const logoutUrl = `https://${
    process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE
  }/member/logout.gd?returnURL=${encodeURIComponent(location.href)}`;

  // 통합회원일때 경로
  const myShopUrl = `${COMMERCE_DOMAIN}/mygodo/main.gd`;
  let myPageUrl = `${process.env.NEXT_PUBLIC_DOMAIN_ACCOUNTS}/mypage/acc`;

  // 일반회원일 때
  if (!profile?.isIntegrated) {
    myPageUrl = `${COMMERCE_DOMAIN}/mygodo/member/my-info.gd`;
  }

  const handleLoginClick = () => {
    const url = `${COMMERCE_DOMAIN}/member/login.gd?returnURL=${encodeURIComponent(location.href)}`;
    location.href = url;
  };

  const handleRegisterClick = () => {
    const url = `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/z/shopby/register?mallType=shopby_pro`;
    location.href = url;
  };

  const userName = `${profile?.name}님` ?? '';

  return (
    <>
      {!isLoggedIn ? (
        <div className="header__user-login">
          {!isSimple && (
            <Button
              className="header__user-btn-join"
              label="무료로 시작하기"
              hierarchy="primary-red"
              size="lg"
              fullSized
              onClick={handleRegisterClick}
            />
          )}
          <Button
            className="header__user-btn-login"
            label="로그인"
            hierarchy="secondary-gray"
            size="lg"
            fullSized
            onClick={handleLoginClick}
          />
        </div>
      ) : (
        <>
          <div className="header__user-pc">
            <Dropdown label={userName}>
              <ul>
                <li>
                  <Button label="내 쇼핑몰 관리" size="sm" leadingIcon="building02" href={myShopUrl} />
                </li>
                <li>
                  <Button label="회원정보 수정" size="sm" leadingIcon="setting02" href={myPageUrl} />
                </li>
                <li>
                  <Button href={logoutUrl} label="로그아웃" size="lg" hierarchy="secondary-color" fullSized />
                </li>
              </ul>
            </Dropdown>
          </div>
          <div className="header__user-mobile">
            <p>
              <Button label={userName} href={myPageUrl} size="lg" hierarchy="tertiary-gray" trailingIcon="setting02" />
              <Button
                href={myShopUrl}
                leadingIcon="building02"
                label="내 쇼핑몰 관리"
                hierarchy="secondary-gray"
                size="md"
              />
            </p>
            <Button label="로그아웃" hierarchy="secondary-color" size="lg" fullSized href={logoutUrl} />
          </div>
        </>
      )}
    </>
  );
};
