export default function ContactInfoBoxes() {
  const info = [
    {
      title: "Email us at",
      detail: "sales@resumon.com",
      link: "mailto:sales@resumon.com",
    },
    {
      title: "Our Helpline",
      detail: "+21 00 99999 1212",
      link: "tel:+210099991212",
    },
    {
      title: "Address",
      detail: "LT 512, New York, America",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-8 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <h4 className="text-gray-500 text-sm font-medium mb-2">
              {item.title}
            </h4>
            {item.link !== "#" ? (
              <a
                href={item.link}
                className="text-gray-900 font-semibold text-lg hover:text-green-600"
              >
                {item.detail}
              </a>
            ) : (
              <p className="text-gray-900 font-semibold text-lg">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
