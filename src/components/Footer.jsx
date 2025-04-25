const Footer = () => {
    return (
      <footer className="bg-green-100 text-sm text-gray-700 py-10 px-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h3 className="font-semibold mb-2">Redes Sociales</h3>
            <div className="flex gap-4">
            <a href="#"><img src="/instagram.svg" alt="instagram" className="w-10"/></a>
            <a href="#"><img src="/facebook.svg" alt="facebook" className="w-10" /></a>
            <a href="#"><img src="/youtube.svg" alt="youtube" className="w-10" /></a>
            </div>
            <p className="mt-2">Idiomas: Español</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Aprende</h3>
            <a><p>Artículos</p></a>
            <a><p>Posts</p></a>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Compañía</h3>
            <p>Contacto</p>
            <p>Términos y Condiciones</p>
            <p>Política de Privacidad</p>
          </div>
        </div>
  
        <div className="text-xs border-t pt-4">
          ¿Tienes más consultas? Contáctanos en <a className="text-blue-600 underline" href="">soporte@nutrismart.app</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  