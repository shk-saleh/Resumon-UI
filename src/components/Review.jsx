import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Mousewheel } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';

const Reviews = () => {
  const reviews = [
    {
      id: 1, name: "Ayesha Khan", rating: 4.5,
      title: "Software Engineer - Lahore, PK",
      gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
      text: "Resumon literally saved me hours! I just wrote a small prompt about myself and it generated a professional resume instantly. The ATS score checker helped me improve my chances before applying — and guess what, I actually got interview calls!"
    },
    {
      id: 2, name: "Daniel Ahmed", rating: 5,
      title: "Marketing Executive - Karachi, PK",
      gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
      text: "Loved how simple and fast this platform is. The AI-based resume builder feels like having your own career assistant. The templates are modern and recruiter-friendly — highly recommended for students and professionals!",
    },
      {
      id: 3, name: "Fatima Noor", rating: 4,
      title: "UI/UX Designer - Islamabad, PK",
      gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
      text: "As a fresh graduate with no prior experience, I was really struggling to create my first professional resume. Resumon's AI understood my skills, education, and projects perfectly, turning them into a well-structured resume that truly represents me!"
    },
  ];

  const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full"
         style={{ background: review.gradient}}>
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= review.rating ? 'text-[#EB7C4A]' : 'text-white'}`}
            fill={star <= review.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-[#858383] text-sm mb-6 leading-relaxed"> {review.text} </p>
      <h4 className="text-md font-medium text-[#000000]">{review.name}</h4>
      <p className="text-sm text-[#858383]">{review.title}</p>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-center mb-16 text-2xl sm:text-3xl text-[#000000]">
          What our user's are saying?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="h-[570px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={16}
              autoplay={{ delay: 0, reverseDirection: false}} speed={7000} loop
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[570px] overflow-hidden">
            <Swiper className="h-full"
              direction="vertical" slidesPerView={2} spaceBetween={16}
              modules={[Autoplay]} autoplay={{ delay: 0, reverseDirection: true}} speed={10000} loop 
              //mousewheel={true} modules={[Mousewheel]}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[570px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={16}
              autoplay={{ delay: 0, reverseDirection: false}} speed={7000} loop
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