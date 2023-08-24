import { Button } from 'ui/src/components/button/Button';
import { CustomLink } from 'ui/src/components/CustomLink';
import { Icon } from 'ui/src/components/Icon';
import classnames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import { SvgIcon } from 'ui/src/components/svg/SvgIcon';

const MENU_LIST = [
  { id: 1, name: '샵바이', href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/z/shopby/intro` },
  { id: 2, name: '마케팅', href: `https://${process.env.NEXT_PUBLIC_DOMAIN_MARKETING}/index.gd` },
  { id: 3, name: '쇼핑몰 제작', href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/promotion/hae-dream.gd` },
  { id: 4, name: '디자인', href: `https://${process.env.NEXT_PUBLIC_DOMAIN_DESIGN}` },
  { id: 5, name: '워크스페이스', href: process.env.NEXT_PUBLIC_DOMAIN_WORKSPACE },
  { id: 6, name: '스토어', href: process.env.NEXT_PUBLIC_DOMAIN_APP_STORE },
];

export const AllMenu = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isExtend, setIsExtend] = useState(false);

  const handleToggleSubList = () => {
    setIsExtend((isExtend) => !isExtend);
  };
  const handleCheckClickEl = (e: any) => {
    if (!wrapRef?.current?.classList.contains('is-extend')) return;
    if (!wrapRef || !wrapRef?.current?.contains(e.target)) return handleToggleSubList();
  };
  useEffect(() => {
    window.addEventListener('click', handleCheckClickEl);
    return () => window.removeEventListener('click', handleCheckClickEl);
  }, []);

  return (
    <div ref={wrapRef} className={classnames('whole-menu', isExtend ? 'is-extend' : '')}>
      <Button
        label="전체메뉴"
        onlyIcon
        className={`whole-menu__trigger ${isExtend ? 'is-active' : ''}`}
        // leadingIcon={<Icon type="dot-grid" />}
        onClick={() => setIsExtend((prev) => !prev)}
      />

      {isExtend && (
        <div className="whole-menu__panel">
          <p className="whole-menu__main">
            <a className="whole-menu__main-link" href={`https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}`}>
              <Icon type="ico-m-sm" />
              nhn커머스 메인
            </a>
            <a
              className="whole-menu__main-link"
              href={`https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/customer/main.gd`}
            >
              <SvgIcon icon="messageSmileSquare" size={24} color="gray500" />
              고객센터
            </a>
          </p>
          <ul className="whole-menu__list">
            {MENU_LIST.map((item) => (
              <li key={item.id}>
                <CustomLink
                  className="whole-menu__link"
                  size="sm"
                  label={item.name}
                  rel="noreferrer noopener"
                  href={item.href}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
