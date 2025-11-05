const Compare = () => {
  const features = [
    { name: "Resume Creation", free: true, pro: true, elite: true },
    { name: "Access to premium templates", free: false, pro: true, elite: true },
    { name: "Multilingual", free: true, pro: true, elite: true },
    { name: "Save as PDF", free: true, pro: true, elite: true },
    { name: "Access to AI Feature", free: false, pro: true, elite: true },
    { name: "Share on Social Media", free: false, pro: false, elite: true },
    { name: "Auto-Suggestion", free: false, pro: true, elite: true },
    { name: "Unlimited Resumes", free: false, pro: false, elite: true },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto pt-10 pb-20 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-gray-800">
        Compare Plans & Features
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-4 text-left font-medium text-gray-700">Features</th>
              <th className="py-4 text-center font-medium text-gray-700">Free</th>
              <th className="py-4 text-center font-medium text-gray-700">Pro</th>
              <th className="py-4 text-center font-medium text-gray-700">Elite</th>
            </tr>
          </thead>

          <tbody>
            {features.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 text-gray-800">{item.name}</td>
                <td className="text-center text-gray-500">{item.free ? "✅" : "❌"}</td>
                <td className="text-center text-gray-500">{item.pro ? "✅" : "❌"}</td>
                <td className="text-center text-gray-500">{item.elite ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Compare;
