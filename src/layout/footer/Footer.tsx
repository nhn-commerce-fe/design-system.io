import { Logo } from 'ui/src/components/logo/Logo';
import { Sns } from 'ui/src/components/Sns';
import { CustomLink } from 'ui/src/components/CustomLink';
import Dropdown from 'ui/src/components/Dropdown';
import { SvgIcon } from 'ui/src/components/svg/SvgIcon';
import { MenuItem } from 'ui/src/layout/header/MenuItem';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button } from 'ui/src/components/button/Button';
import { Icon } from 'ui/src/components/Icon';

interface FooterLink {
  id: number;
  title: string;
  href: string;
  children?: FooterLink[];
}

interface FooterProps {
  isSimple?: boolean;
}

export const FOOTER_LINK: FooterLink[] = [
  {
    id: 1,
    title: 'NHN COMMERCE',
    href: '',
    children: [
      {
        id: 2,
        title: '공지사항',
        href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/customer/board-list.gd?type=notice`,
      },
      {
        id: 3,
        title: '회사소개',
        href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/company/main.gd`,
      },
    ],
  },
  {
    id: 4,
    title: 'Partners',
    href: '',
    children: [
      {
        id: 5,
        title: '서비스 제휴문의',
        href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/company/information/contact.gd`,
      },
      { id: 6, title: '쇼핑몰 제작 파트너 문의', href: 'https://www.haedream-partner.co.kr' },
    ],
  },
  {
    id: 7,
    title: 'Developers',
    href: '',
    children: [
      { id: 8, title: '워크스페이스', href: process.env.NEXT_PUBLIC_DOMAIN_WORKSPACE! },
      { id: 9, title: 'API가이드', href: 'https://docs.shopby.co.kr' },
      { id: 10, title: '스킨/앱 개발 가이드', href: `${process.env.NEXT_PUBLIC_DOMAIN_WORKSPACE}/guide/app/dev` },
      { id: 11, title: '포럼', href: `${process.env.NEXT_PUBLIC_DOMAIN_WORKSPACE}/support/forum` },
      { id: 12, title: '고도몰/이나무 Open API', href: `${process.env.NEXT_PUBLIC_DOMAIN_DEV_CENTER}` },
    ],
  },
  {
    id: 13,
    title: 'Assistant',
    href: '',
    children: [
      { id: 14, title: '플러스샵', href: `https://${process.env.NEXT_PUBLIC_DOMAIN_PULS}` },
      {
        id: 15,
        title: '고도몰/이나무 맞춤제작',
        href: `https://${process.env.NEXT_PUBLIC_DOMAIN_DESIGN}/custom/index.php`,
      },
    ],
  },
];

export const CORPORATION_LINK: Omit<FooterLink, 'children'>[] = [
  {
    id: 1,
    title: '이용약관',
    href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/etc/agreement/integrate-join-agreement.gd`,
  },
  {
    id: 2,
    title: '개인정보처리방침',
    href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/etc/agreement/privacy-agreement.gd`,
  },
  {
    id: 3,
    title: '네임서버',
    href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/customer/faq-list.gd?sno=1196#1196`,
  },
  {
    id: 4,
    title: '사이트 맵',
    href: `https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/etc/sitemap.gd`,
  },
  { id: 5, title: 'NHN브랜드 사이트', href: 'https://inside.nhn.com/br/index.nhn' },
];

const OutLink = ({ title, children }: Omit<FooterLink, 'href' | 'id'>) => {
  return (
    <div>
      <dt>{title}</dt>
      <dd>
        {children?.map((item) => (
          <CustomLink
            key={item.id.toString()}
            label={item.title}
            href={item.href}
            size="md"
            hierarchy="link-gray"
            target="_blank"
          />
        ))}
      </dd>
    </div>
  );
};

const handleIsmsClick = () => {
  window.open(`https://${process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE}/etc/isms.gd`, 'popup', 'width=820,height=870');
};

export const Footer = ({ isSimple }: FooterProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTopBtnPosition = () => {
    const options = {
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setIsFixed(entry.isIntersecting);
      });
    };

    const io = new IntersectionObserver(callback, options);
    io.observe(footerRef!.current!);
  };

  useEffect(() => {
    if (!footerRef) return;
    handleTopBtnPosition();
  }, []);
  return (
    <footer className={classNames('g-footer', isSimple && 'g-footer--simple')} ref={footerRef}>
      <dl className="g-footer__outlink">
        {FOOTER_LINK.map((links) => (
          <OutLink key={links.id.toString()} title={links.title} children={links.children} />
        ))}
      </dl>
      <div className="g-footer__inner">
        <p className="g-footer__logo">
          <Logo type="commerce" hierarchy="white" />
        </p>
        <p className="contact">
          <span className="contact__item">엔에이치엔커머스(주)</span>
          <span className="contact__item">대표: 이윤식</span>
          <span className="contact__item">
            개인정보보호책임자: 김종승(<a href="mailto:Privacy1@nhn-commerce.com">Privacy1@nhn-commerce.com</a>)
          </span>
          <span className="contact__item">고객센터: 1688-7662</span>
          <span className="contact__item">팩스: 02-567-3744</span>
          <span className="contact__item">서울시 구로구 디지털로26길 72</span>
          <span className="contact__item">사업자등록번호: 120-86-46911</span>
          <span className="contact__item">통신판매업신고: 2015-서울구로-0049</span>
          <CustomLink
            className="contact__item"
            label="사업자정보확인"
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208646911"
            size="md"
          />
        </p>
        <nav className="corp">
          {CORPORATION_LINK.map((link) => (
            <CustomLink
              key={link.id.toString()}
              hierarchy="link-gray"
              label={link.title}
              href={link.href}
              size="md"
              target="_blank"
            />
          ))}
        </nav>
        <Dropdown
          label="한국어"
          hierarchy={isSimple ? 'link-gray' : 'secondary-gray'}
          // leadingIcon={<SvgIcon icon="globe01" size={20} color={isSimple ? 'gray300' : 'gray700'} />}
          disabled
        >
          <ul>
            {FOOTER_LINK.map((link) => (
              <>
                {link.children &&
                  link.children.length > 0 &&
                  link.children?.map((child) => (
                    <li key={child.id.toString()}>
                      <MenuItem label={child.title} href={child.href} target="_blank" />
                    </li>
                  ))}
              </>
            ))}
          </ul>
        </Dropdown>
      </div>

      <div className="g-footer__bottom">
        <p>©NHN COMMERCE Corp. All rights reserved.</p>
        <nav className="g-footer__sns">
          <Sns type="naver" label="naver" href="https://blog.naver.com/nhncommerce" target="_blank" />
          <Sns type="youtube" label="youtube" href="https://www.youtube.com/nhncommerce" target="_blank" />
          <Sns type="facebook" label="facebook" href="https://www.facebook.com/nhncommercekorea" target="_blank" />
          <Sns type="instagram" label="instagram" href="https://www.instagram.com/nhncommerce/" target="_blank" />
          <Sns
            type="linkedin"
            label="linkedin"
            href="https://www.linkedin.com/company/nhn-commerce/posts/?feedView=all"
            target="_blank"
          />
        </nav>

        {/* isms */}
        <button className="ico ico--mark-isms ico__focus" onClick={handleIsmsClick} />
      </div>
      <Button
        className={classNames('btn-top', isFixed && 'is-fixed')}
        // leadingIcon={<Icon type="align-top-01" />}
        onlyIcon
        label="go top"
        onClick={goToTop}
      />
    </footer>
  );
};
