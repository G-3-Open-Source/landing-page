import { useTranslation } from "react-i18next"; 

const ComoFunciona = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <section
        id="ComoFunciona"
        className="max-w-screen-xl mx-auto font-poppins mb-20 scroll-mt-30"
      >
        <div className="flex px-5 pt-14 py-14 justify-center">
          <div className="flex flex-wrap">
            <div className="bg-sky-green px-8 pt-4 pb-8 rounded-lg overflow-hidden text-center relative">
              <div className="flex flex-wrap justify-center max-w-4xl font-bold">
                <div className="text-[36px] mt-9 mb-15">
                  {t("how_it_works.title")}
                </div>
                <div className="text-[24px] flex flex-col text-left gap-y-8 mb-9">
                  <div>1. {t("how_it_works.step1")}</div>
                  <div>2. {t("how_it_works.step2")}</div>
                  <div>3. {t("how_it_works.step3")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComoFunciona;
