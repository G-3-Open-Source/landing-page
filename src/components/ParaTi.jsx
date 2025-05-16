const ParaTi = () => {
    return (
      <section id="Para-ti" className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30">
        <h2 className="font-bold text-3xl md:text-5xl pb-12 md:pb-20 text-center md:text-left">
          ¿Qué hace NutriSmart por ti?
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-20 md:gap-x-32">
          <div className="flex items-start">
            <img src="assets/WorldIcon.png" className="w-12 h-12 mr-6 mt-1" alt="Evaluación" />
            <div>
              <p className="text-2xl md:text-[32px] font-bold pb-2">Evaluación inteligente</p>
              <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
                Responde un cuestionario breve <br />
                y obtén un análisis nutricional <br />
                pensado para ti desde el primer clic.
              </p>
            </div>
          </div>
  
          <div className="flex items-start">
            <img src="assets/ViewIcon.png" className="w-12 h-12 mr-6 mt-1" alt="Seguimiento" />
            <div>
              <p className="text-2xl md:text-[32px] font-bold pb-2">Seguimiento en tiempo real</p>
              <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
                Sigue tus avances con gráficas dinámicas <br />
                y reportes semanales que hablan tu idioma.
              </p>
            </div>
          </div>
  
          <div className="flex items-start">
            <img src="assets/UserIcon.png" className="w-12 h-12 mr-6 mt-1" alt="Planes" />
            <div>
              <p className="text-2xl md:text-[32px] font-bold pb-2">Planes personalizados</p>
              <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
                Diseñamos menús que se adaptan a tus gustos, <br />
                tu rutina y tus metas. Comer bien no tiene <br />
                por qué ser complicado.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <img src="assets/HeartIcon.png" className="w-12 h-12 mr-6 mt-1" alt="Adaptación" />
            <div>
              <p className="text-2xl md:text-[32px] font-bold pb-2">Nutrición que se adapta a ti</p>
              <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
                Para quienes quieren sentirse mejor <br />
                sin contar calorías a cada paso.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ParaTi;
  