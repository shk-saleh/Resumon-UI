import { reviews } from "../data/reviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';

const Reviews = () => {
  const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full"
         style={{ background: review.gradient}}>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="h-[555px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12}
              autoplay={{ delay: 0, reverseDirection: false}} speed={4000} loop
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[555px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12}
              autoplay={{ delay: 0, reverseDirection: true}} speed={4000} loop 
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-[555px] overflow-hidden">
            <Swiper className="h-full"
              modules={[Autoplay]} direction="vertical" slidesPerView={2} spaceBetween={12}
              autoplay={{ delay: 0, reverseDirection: false}} speed={4000} loop
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

// import { reviews } from "../data/reviews";
// import Marquee from "react-fast-marquee";
// import { Star } from "lucide-react";

// const Reviews = () => {
//   const ReviewCard = ({ review }) => (
//     <div
//       className="bg-white rounded-xl p-6 border border-gray-200 h-full"
//       style={{ background: review.gradient }}
//     >
//       <div className="flex gap-1 mb-4">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star
//             key={star}
//             className={`w-4 h-4 ${
//               star <= review.rating ? "text-[#EB7C4A]" : "text-white"
//             }`}
//             fill={star <= review.rating ? "currentColor" : "none"}
//           />
//         ))}
//       </div>
//       <p className="text-[#4B5563] text-sm mb-6 leading-relaxed"> {review.text}</p>
//       <h4 className="text-md font-semibold text-[#111827]">{review.name} </h4>
//       <p className="text-sm text-[#6B7280]">{review.title}</p>
//     </div>
//   );

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
//       <div className="max-w-7xl mx-auto  pb-100">
//         <h2 className="text-center mb-16 text-2xl sm:text-3xl text-[#000000]">
//           What our users are saying?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
//           <div className="h-[570px] overflow-hidden [transform:rotate(-90deg)_translateX(-100%)] -mt-120">
//             <Marquee speed={40} loop={0} className="overflow-hidden h-full"
//             >
//               <div className="[transform:rotate(90deg)] gap-4 mx-2 w-100 flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102 cursor-pointer">
//                 {reviews.map((review) => (
//                   <ReviewCard key={review.id} review={review} />
//                 ))}
//               </div>
//             </Marquee>
//           </div>

//           <div className="h-[570px] overflow-x-hidden [transform:rotate(-90deg)_translateX(-100%)] -mt-120">
//             <Marquee speed={50} loop={0} className="overflow-hidden h-full ">
//               <div className="[transform:rotate(90deg)] gap-4 mx-2 w-100 flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102 cursor-pointer">
//                 {reviews.map((review) => (
//                   <ReviewCard key={review.id} review={review} />
//                 ))}
//               </div>
//             </Marquee>
//           </div>

//           <div className="h-[570px] overflow-x-hidden [transform:rotate(-90deg)_translateX(-100%)] -mt-120">
//             <Marquee speed={45} loop={0} className="overflow-hidden h-full">
//               <div className="[transform:rotate(90deg)] gap-100 mx-2 w-100 flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102 cursor-pointer">
//                 {reviews.map((review) => (
//                   <ReviewCard key={review.id} review={review} />
//                 ))}
//               </div>
//             </Marquee>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };
// export default Reviews;