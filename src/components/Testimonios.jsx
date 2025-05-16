import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Importa el hook

const Testimonials = () => {
  const { t } = useTranslation(); // Inicializa el hook

  const testimonials = [
    {
      name: t("testimonials.user1.name"),
      text: t("testimonials.user1.text"),
      sub: t("testimonials.user1.sub"),
      img: "./assets/profile3.jpg",
    },
    {
      name: t("testimonials.user2.name"),
      text: t("testimonials.user2.text"),
      sub: t("testimonials.user2.sub"),
      img: "./assets/profile2.jpg",
    },
    {
      name: t("testimonials.user3.name"),
      text: t("testimonials.user3.text"),
      sub: t("testimonials.user3.sub"),
      img: "./assets/profile1.png",
    },
  ];

  return (
    <section
      id="testimonios"
      className="bg-white py-12 text-center px-6 scroll-mt-30"
    >
      <div className="text-yellow-500 text-3xl flex justify-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="font-bold text-lg mb-2">+50,000</p>
      <p className="text-gray-600 mb-10">{t("testimonials.title")}</p>

      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.map((card, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 max-w-xs text-left border border-gray-100"
          >
            <img
              src={card.img}
              alt={card.name}
              className="w-14 h-14 rounded-full mb-4 mx-auto"
            />
            <p className="font-semibold text-center">{card.name}</p>
            <div className="text-yellow-500 text-sm flex justify-center my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm italic text-gray-700 text-center">
              {card.text}
            </p>
            <p className="text-xs text-gray-500 mt-2 text-center">{card.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
