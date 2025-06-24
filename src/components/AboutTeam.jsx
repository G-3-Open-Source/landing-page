// src/components/AboutTeam.jsx
import { useTranslation } from 'react-i18next';

const AboutTeam = () => {
    const { t } = useTranslation();

    // ID de tu vídeo en YouTube
    const videoId = 'FPMpnGxqZxg';

    return (
        <section
            id="about-team"
            className="max-w-screen-xl mx-auto py-20 px-6 scroll-mt-30 font-poppins"
        >
            <h2 className="text-4xl font-bold mb-8 text-center">
                {t('about_team.title')}
            </h2>

            <div className="flex justify-center mb-12">
                <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={t('about_team.video_alt')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            <p className="text-lg text-center text-gray-700">
                {t('about_team.description')}
            </p>
        </section>
    );
};

export default AboutTeam;
