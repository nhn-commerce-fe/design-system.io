import { Size } from '../../../constant/size';
import classnames from 'classnames';
import { SvgIcon } from '../svg/SvgIcon';
import { IconName } from '../svg/const';
import { forwardRef, type ComponentProps } from 'react';

interface CarouselArrowProps extends Omit<ComponentProps<'button'>, 'type' | 'ref'> {
  size?: Omit<Size, 'sm' | 'xl' | '2xl'>;
  arrow?: 'left' | 'right';
  type?: 'b-chevron' | 'b-arrow';
  disabled?: boolean;
}

const ARROW_TYPE: { [key: string]: IconName } = {
  'b-chevron': 'chevronRight',
  'b-arrow': 'arrowRight',
};

export const CarouselArrow = forwardRef<HTMLButtonElement, CarouselArrowProps>(
  ({ size = 'md', arrow = 'right', type = 'b-arrow', disabled = false, ...props }, ref) => {
    const a11yText = 'left' ? '이전' : '다음';
    const carouselSize = size === 'md' ? 20 : 24;
    return (
      <button
        ref={ref as never}
        type="button"
        className={classnames(
          'carousel-arrow',
          `carousel-arrow--${arrow}`,
          `carousel-arrow--${type}`,
          `carousel-arrow--${size}`
        )}
        disabled={disabled}
        {...props}
      >
        <SvgIcon icon={ARROW_TYPE[type]} size={carouselSize} color={disabled ? 'gray200' : 'gray400'} />
        <span className="a11y">{a11yText} 버튼</span>
      </button>
    );
  }
);

// export const CarouselArrow =
