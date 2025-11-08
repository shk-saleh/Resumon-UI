import { info } from "../data/info";

export default function ContactInfo() {

  return (
    <section className="px-8 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.map((item, index) => (
          <div key={index}
            className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
          >
            <h4 className="text-gray-500 text-sm font-medium mb-2">
              {item.title}
            </h4>
            {item.link !== "#" ? (
              <a
                href={item.link}
                className="text-gray-900 font-medium text-lg hover:text-[#25A57A]"
              >
                {item.detail}
              </a>
            ) : (
              <p className="text-gray-900 font-medium text-lg">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}