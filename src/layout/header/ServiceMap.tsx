import { Button } from 'ui/src/components/button/Button';
import { Logo } from 'ui/src/components/logo/Logo';
import { MenuItem } from './MenuItem';

//TODO: php 사이트에도 header 적용시 추가 예정

export const ServiceMap = () => {
  return (
    <article className="service-map">
      <header className="service-map__header">
        <h2>
          <Logo className="service-map__home-link" onlyMobile href="/" type="commerce" />
        </h2>
        <Button hierarchy="tertiary-color" size="lg" label="전체 사이트맵 보기" trailingIcon="arrowRight" />
      </header>
      <div className="service-map__list">
        <dl>
          <dt className="service-map__menu-title">타이틀1</dt>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
        </dl>
        <dl>
          <dt className="service-map__menu-title">타이틀2</dt>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
        </dl>
        <dl>
          <dt className="service-map__menu-title">타이틀3</dt>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
        </dl>
        <dl>
          <dt className="service-map__menu-title">타이틀4</dt>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
        </dl>
        <dl>
          <dt className="service-map__menu-title">타이틀5</dt>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
          <dd>
            <MenuItem label="메뉴명" href="/" text="보조 문구를 입력하세요 <br/>보조 문구를 입력하세요" />
          </dd>
        </dl>
      </div>
    </article>
  );
};
