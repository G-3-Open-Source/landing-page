import { useTranslation } from "react-i18next"; 

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer className="bg-green-100 text-sm text-gray-700 py-10 px-6">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h3 className="font-semibold mb-2">{t("footer.social_media")}</h3>
          <div className="flex gap-4">
            <a href="#">
              <img src="./assets/instagram.svg" alt="Instagram" className="w-10" />
            </a>
            <a href="#">
              <img src="./assets/facebook.svg" alt="Facebook" className="w-10" />
            </a>
            <a href="#">
              <img src="./assets/youtube.svg" alt="Youtube" className="w-10" />
            </a>
          </div>
          <p className="mt-2">{t("footer.languages")}: {t("footer.language")}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">{t("footer.learn")}</h3>
          <a>
            <p>{t("footer.articles")}</p>
          </a>
          <a>
            <p>{t("footer.posts")}</p>
          </a>
        </div>

        <div>
          <h3 className="font-semibold mb-2">{t("footer.company")}</h3>
          <p>{t("footer.contact")}</p>
          <p>{t("footer.terms")}</p>
          <p>{t("footer.privacy")}</p>
        </div>
      </div>

      <div className="text-xs border-t pt-4">
        {t("footer.support")}{" "}
        <a
          className="text-blue-600 underline"
          href="mailto:support@alimentateplus.app"
        >
          {t("footer.email")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
