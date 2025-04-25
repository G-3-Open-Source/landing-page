const CTA = () => {
    return (
      <section id="cta" className="bg-white py-16 px-6 flex flex-col md:flex-row justify-between items-center mx-40 gap-10 scroll-mt-30">
        <div className="md:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Empieza gratis hoy</h2>
          <p className="text-gray-600 mb-6">
            Tu viaje saludable comienza ahora, nutrición inteligente y resultados.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold">
            Comenzar
          </button>
          <div className="flex gap-4 mt-4">
            <img src="/appstore.png" alt="App Store" className="h-10" />
            <img src="/googleplay.png" alt="Google Play" className="h-10" />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="public/qr.png" alt="QR Code" className="w-48 h-48" />
        </div>
      </section>
    );
  };
  
  export default CTA;
  