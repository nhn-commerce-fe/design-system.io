import { CustomLink } from '../components/CustomLink';
import Media from '../components/Media';
import { SvgIcon } from '../components/svg/SvgIcon';
import classnames from 'classnames';

export const Alternating02Section = () => {
  return (
    <section className={classnames('alternating-02-section')}>
      <Media
        icon="star06"
        title="브랜드를 표현하는 감각적인 디자인"
        contents={`마음에 드는 디자인을 선택해 쇼핑몰을 만들고,\n자유롭게 커스텀하여 나만의 감각적인 브랜드로 성장할 수 있어요`}
      >
        <CustomLink
          label="디자인 스토어 둘러보기"
          hierarchy="link-color"
          trailingIcon={<SvgIcon icon="arrowRight" size={20} color="blue500" />}
        />
      </Media>
      <Media
        icon="star06"
        title="브랜드를 표현하는 감각적인 디자인"
        reverse
        contents={`마음에 드는 디자인을 선택해 쇼핑몰을 만들고,\n자유롭게 커스텀하여 나만의 감각적인 브랜드로 성장할 수 있어요`}
      >
        <CustomLink
          label="디자인 스토어 둘러보기"
          hierarchy="link-color"
          trailingIcon={<SvgIcon icon="arrowRight" size={20} color="blue500" />}
        />
      </Media>
      <Media
        icon="star06"
        title="브랜드를 표현하는 감각적인 디자인"
        contents={`마음에 드는 디자인을 선택해 쇼핑몰을 만들고,\n자유롭게 커스텀하여 나만의 감각적인 브랜드로 성장할 수 있어요`}
      >
        <CustomLink
          label="디자인 스토어 둘러보기"
          hierarchy="link-color"
          trailingIcon={<SvgIcon icon="arrowRight" size={20} color="blue500" />}
        />
      </Media>
    </section>
  );
};
