import { BadgeGroup } from '../../components/badge/BadgeGroup';
import { Button } from '../../components/button/Button';

export const SplitImage = () => {
  return (
    <section className="hero split-image">
      <div className="hero__inner split-image__inner">
        <div className="hero__content split-image__content">
          <BadgeGroup
            href="/"
            label="혜택받기"
            color="gray"
            className="hero__badge"
            leading={{
              label: '첫 달 무료혜택 제공중',
              icon: 'dot',
              onlyOutline: true,
            }}
          />

          <h2 className="hero__title split-image__title">성공적인 커머스 전략의 시작 shop by</h2>
          <p className="hero__text">빠르고, 유연하고, 효율적인 환경에서 얻는 무한한 확장성</p>
          <Button
            className="hero__btn split-image__btn-pc"
            label="샵바이로 시작하기"
            href="/"
            hierarchy="primary-red"
            size="2xl"
          />
          <Button
            className="hero__btn split-image__btn-mo"
            label="샵바이로 시작하기"
            href="/"
            hierarchy="primary-red"
            size="xl"
          />
        </div>
      </div>
      <div className="hero__img split-image__img"></div>
    </section>
  );
};
