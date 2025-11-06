import PlansCard from "./PlansCard";

const Plans = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
          Choose our Plans
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#858383] mb-16">
          Flexible Plans for job seekers
        </p>
      </div>
      <PlansCard showToggle={false} />

    </section>
  );
};
export default Plans;