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

// import React from 'react';
// import Marquee from 'react-fast-marquee';
// import { Star } from 'lucide-react';

// const Reviews = () => {
//   const column1 = [
//     {
//       id: 1, name: "Ayesha Khan", rating: 4.5,
//       title: "Software Engineer - Lahore, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Resumon literally saved me hours! I just wrote a small prompt about myself and it generated a professional resume instantly. The ATS score checker helped me improve my chances before applying!"
//     },
//     {
//       id: 2, name: "Daniel Ahmed", rating: 5,
//       title: "Marketing Executive - Karachi, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Loved how simple and fast this platform is. The AI-based resume builder feels like having your own career assistant. The templates are modern and recruiter-friendly!"
//     },
//     {
//       id: 3, name: "Fatima Noor", rating: 4,
//       title: "UI/UX Designer - Islamabad, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "As a fresh graduate with no prior experience, I was really struggling to create my first professional resume. Resumon's AI understood my skills perfectly!"
//     },
//   ];

//   const column2 = [
//     {
//       id: 4, name: "Hassan Malik", rating: 5,
//       title: "Data Analyst - Islamabad, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "I tried multiple resume builders before finding Resumon, but this one stands out! Got my dream job offer within 2 weeks of using it!"
//     },
//     {
//       id: 5, name: "Sara Ali", rating: 4.5,
//       title: "Fresh Graduate - Rawalpindi, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "The ATS checker is a game-changer! My resume now passes all the screening systems."
//     },
//     {
//       id: 6, name: "Ahmed Khan", rating: 5,
//       title: "Software Developer - Lahore, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Professional templates that actually look good! Landed 5 interviews in 2 weeks."
//     },
//   ];

//   const column3 = [
//     {
//       id: 7, name: "Bilal Hussain", rating: 4.5,
//       title: "Product Manager - Karachi, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Smart suggestions helped me highlight skills I didn't know I had. Highly recommended!"
//     },
//     {
//       id: 8, name: "Zainab Sheikh", rating: 5,
//       title: "Content Writer - Faisalabad, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Creating a resume has never been this easy. The AI perfectly captured my writing experience!"
//     },
//     {
//       id: 9, name: "Usman Ali", rating: 5,
//       title: "Business Analyst - Multan, PK",
//       gradient: "linear-gradient(to bottom right, #2DC08D, #B2F5EA)",
//       text: "Resumon's dual mode is perfect! I can use AI when I'm in a hurry or manually craft when I have time."
//     },
//   ];

//   const ReviewCard = ({ review }) => (
//     <div 
//       className="rounded-xl p-6 border border-gray-200 mb-4"
//       style={{ background: review.gradient }}
//     >
//       <div className="flex gap-1 mb-4">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star
//             key={star}
//             className={`w-4 h-4 ${star <= review.rating ? 'text-[#EB7C4A]' : 'text-white'}`}
//             fill={star <= review.rating ? 'currentColor' : 'none'}
//           />
//         ))}
//       </div>
//       <p className="text-[#858383] text-sm mb-6 leading-relaxed">
//         {review.text}
//       </p>
//       <h4 className="text-md font-medium text-[#000000]">{review.name}</h4>
//       <p className="text-sm text-[#858383]">{review.title}</p>
//     </div>
//   );

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         <h2 className="text-center mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]">
//           What our user's are saying?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Column 1 - Moving Up */}
//           <Marquee 
//             direction="up" 
//             speed={30} 
//             gradient={false}
//             pauseOnHover
//             className="h-[570px]"
//           >
//             {column1.map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </Marquee>

//           {/* Column 2 - Moving Down (Reverse) */}
//           <Marquee 
//             direction="down" 
//             speed={25} 
//             gradient={false}
//             pauseOnHover
//             className="h-[570px]"
//           >
//             {column2.map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </Marquee>

//           {/* Column 3 - Moving Up */}
//           <Marquee 
//             direction="up" 
//             speed={35} 
//             gradient={false}
//             pauseOnHover
//             className="h-[570px]"
//           >
//             {column3.map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </Marquee>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;