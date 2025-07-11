import { useTranslation } from "react-i18next"; // Importa el hook

const ParaTi = () => {
  const { t } = useTranslation(); 

  return (
    <section
      id="Para-ti"
      className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30"
    >
      <h2 className="font-bold text-3xl md:text-5xl pb-12 md:pb-20 text-center md:text-left">
        {t("for_you.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-20 md:gap-x-32">
        <div className="flex items-start">
          <img
            src="./assets/WorldIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit1")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-bold pb-2">
              {t("for_you.benefit1")}
            </p>
            <img
              src="./assets/FormularioImg.png"
              className="w-70 h-80 mr-6 mt-1"
              alt={t("./assets/FormularioImg.png")}
            />
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="./assets/ViewIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit2")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-bold pb-2">
              {t("for_you.benefit2")}
            </p>
            <img
              src="./assets/TrackingImg.png"
              className="w-120 h-80 mr-6 mt-1"
            />
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="./assets/UserIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit3")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-bold pb-2">
              {t("for_you.benefit3")}
            </p>
            <img
              src="./assets/iMGLANDING.png"
              className="w-110 h-80 mr-6 mt-1"
            />
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="./assets/HeartIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit4")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-bold pb-2">
              {t("for_you.benefit4")}
            </p>
            <img
              src="./assets/ProtoImg.png"
              className="w-120 h-80 mr-6 mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaTi;
