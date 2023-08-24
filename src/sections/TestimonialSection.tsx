import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { StarRating } from '../components/StarRating';
import TempImg from '../../assets/images/temp/testimonial-img.png';
import { CarouselArrow } from '../components/carouselArrow/CarouselArrow';
import { useRef } from 'react';
import 'swiper/css';

export const TestimonialSection = () => {
  const navPrevRef = useRef<HTMLButtonElement>(null);
  const navNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="section-wrap testimonial-section">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navPrevRef.current!,
          nextEl: navNextRef.current!,
        }}
        spaceBetween="10px"
        onBeforeInit={(swiper) => {
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className="testimonial-section__slide">
          <div className="testimonial-section__content">
            <StarRating total={5} count={1} />
            <blockquote>
              렌탈결제로 젊은층 고객을 확보했어요. 상품을 먼저 구매하고 여러 차례에 걸쳐 분할로 금액을 지불하는 렌탈결제
              기능을 추가했어요. 이 긴을 통해 한 번에 많은 비용의 지출이 부담스러운 젊은층의 구매율을 높일 수 있었어요.
            </blockquote>
            <cite>
              <em>종합몰 K사</em>
              <span>Project Manager</span>
            </cite>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-section__slide">
          <div className="testimonial-section__content">
            <StarRating total={5} count={1} />
            <blockquote>
              렌탈결제로 젊은층 고객을 확보했어요. 상품을 먼저 구매하고 여러 차례에 걸쳐 분할로 금액을 지불하는 렌탈결제
              기능을 추가했어요. 이 긴을 통해 한 번에 많은 비용의 지출이 부담스러운 젊은층의 구매율을 높일 수 있었어요.
            </blockquote>
            <cite>
              <em>종합몰 K사</em>
              <span>Project Manager</span>
            </cite>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="testimonial-section__carousel">
        <CarouselArrow size="lg" arrow="left" ref={navPrevRef} />
        <CarouselArrow size="lg" ref={navNextRef} />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navPrevRef.current!,
          nextEl: navNextRef.current!,
        }}
        spaceBetween="10px"
        onBeforeInit={(swiper) => {
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <div className="testimonial-section__img">
            <img src={TempImg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-section__img">
            <img src={TempImg} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
