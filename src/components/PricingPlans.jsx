import PlansCard from "./PlansCard";

const Plans = () => {
  return (
    <>
      <h1 className="text-4xl pt-50 font-semibold text-gray-800 text-center">
        Start with our <span className="text-[#149369]">Affordable Plans!</span>
      </h1>
      <p className="text-[#858383] text-sm leading-relaxed font-normal text-center mx-auto mt-4 max-w-2xl">
        Unlock your career potential with our affordable pricing plans.
      </p>

      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
        <PlansCard showToggle={true} />
      </section>
      
    </>
  );
};
export default Plans;