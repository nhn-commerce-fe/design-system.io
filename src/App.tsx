import '../assets/styles/style.scss';
import { SocialProofSection } from './sections/SocialProofSection';
import { MetricsSection } from './sections/MetricsSection';
import { ProgressSection } from './sections/ProgressSection';
import { CtaSection } from './sections/CtaSection';
import { Footer, Header } from './layout/index';
import { HeaderSection } from './sections/HeaderSection';
import { Button } from './components/button/Button';
import { TestimonialSection } from './sections/TestimonialSection';
import { TabModule } from './module/TabModule';

const App = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* <HeaderSimple isSimple type="shopby" href="/" logoLabel="커머스 홈으로 가기 simple" /> */}
      <Header type="shopby" href="/" logoLabel="커머스 홈으로 가기" />
      <HeaderSection subHeading="가장 혁신적인 커머스 플랫폼" heading="커머스 성장에 최적화된 shop by" />
      {/* <FeaturesSection /> */}

      <TabModule />

      <HeaderSection
        subHeading="성장 혜택"
        heading="shop by 성장 지원 프로그램"
        text={`지속적인 브랜드 성장을 지원하기 위해 최근 3개월 평균 거래액에 따라 \n 솔루션 별로 SMS포인트 충전 또는 솔루션 이용 기간 연장에 대한 지원 혜택을 드려요`}
      >
        <Button
          className="header-section__more"
          label="더 알아보기"
          hierarchy="secondary-gray"
          trailingIcon="arrowRight"
          size="xl"
        />
      </HeaderSection>
      <ProgressSection
        steps={[
          {
            icon: 'gift01',
            title: 'title',
            text: 'text',
          },
          {
            icon: 'gift01',
            title: 'title',
            text: 'text',
          },
          {
            icon: 'gift01',
            title: 'title',
            text: 'text',
          },
        ]}
      />
      <MetricsSection />
      <TestimonialSection />
      <SocialProofSection title="Join 4,000+ companies aleady growing" />
      <CtaSection
        title="앞서가는 브랜드의 선택, shop by"
        buttonLabel="샵바이로 시작하기"
        description="고민보다 빠르고 확실하게, 무료로 사용해 보세요"
      />
      <Footer />
      <Footer isSimple />
    </div>
  );
};

export default App;
