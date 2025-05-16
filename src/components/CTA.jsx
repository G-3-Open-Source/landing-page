import { useTranslation } from "react-i18next"; // Importa el hook

const CTA = () => {
  const { t } = useTranslation(); // Inicializa el hook

  return (
    <section
      id="cta"
      className="bg-white px-6 py-20 md:my-30 lg:px-30 flex flex-col md:flex-row justify-between items-center gap-10 scroll-mt-30"
    >
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
        <p className="text-gray-600 mb-6">{t("cta.description")}</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold">
          {t("cta.button")}
        </button>
        <div className="flex gap-4 mt-4">
          <img src="appstore.png" alt={t("cta.app_store")} className="h-10" />
          <img
            src="googleplay.png"
            alt={t("cta.google_play")}
            className="h-10"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="qr.png" alt={t("cta.qr_alt")} className="w-48 h-48" />
      </div>
    </section>
  );
};

export default CTA;
