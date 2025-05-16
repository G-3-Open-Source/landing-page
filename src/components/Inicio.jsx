const Inicio = () => {
    return (
      <section id="para-ti" className="max-w-screen-xl mx-auto py-10 md:py-20 px-6 font-poppins mb-35 mt-10">
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-[60px] leading-tight mb-10 text-left">
          Come bien, vive mejor. <br />
          Nutrición que te entiende
        </h2>
  
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-left font-semibold text-lg md:text-[24px] leading-relaxed">
            <p className="text-soft-gray mb-8">
              En NutriSmart, diseñamos planes de alimentación personalizados que se adaptan a ti, no al revés. <br />
              Con tecnología inteligente y un enfoque humano, <br />
              te ayudamos a transformar tus hábitos, sin complicaciones.
            </p>
  
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <img src="assets/CheckImg.png" alt="check" className="w-6 h-6 mt-1 object-contain" />
                <p className="text-soft-gray">Pierde grasa sin perder sabor</p>
              </div>
  
              <div className="flex items-start gap-3">
                <img src="assets/CheckImg.png" alt="check" className="w-6 h-6 mt-1 object-contain" />
                <p className="text-soft-gray">Gana músculo con recetas reales</p>
              </div>
  
              <div className="flex items-start gap-3">
                <img src="assets/CheckImg.png" alt="check" className="w-6 h-6 mt-1 object-contain" />
                <p className="text-soft-gray">Mejora tu bienestar, día a día</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="assets/HomeImg.png"
              alt="NutriSmart Home"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Inicio;
  