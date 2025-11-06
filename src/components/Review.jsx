import { reviews } from "../data/reviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';

const Reviews = () => {
  const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full"
      style={{ background: review.gradient }}>
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star}
            className={`w-4 h-4 ${star <= review.rating ? 'text-[#EB7C4A]' : 'text-white'}`}
            fill={star <= review.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-[#4B5563] text-[13px] mb-6 leading-relaxed"> {review.text} </p>
      <h4 className="text-[15px] font-semibold text-[#111827]">{review.name}</h4>
      <p className="text-[13px] text-[#6B7280]">{review.title}</p>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center mb-16 text-2xl sm:text-3xl text-[#000000]">
          What our user's are saying?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="h-[500px]  sm:h-[580px] md:h-[610px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12} observer={true}
              observeParents={true}
              autoplay={{ delay: 0, reverseDirection: false }} speed={5000} loop
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[500px] sm:h-[580px] md:h-[610px] overflow-hidden hidden sm:block">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12}
              observer={true} observeParents={true}
              autoplay={{ delay: 0, reverseDirection: true }} speed={5000} loop
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[500px] overflow-hidden sm:h-[580px] md:h-[610px] hidden md:block">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12}
              observer={true} observeParents={true}
              autoplay={{ delay: 0, reverseDirection: false }} speed={5000} loop
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Reviews;