
export const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Nuestro Programa</h1>
            <p className="text-sm text-primary-foreground/80 text-center">Informando y Transformando</p>
          </div>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Nuestra Misión</h2>
              <p className="text-muted-foreground text-center">
                Nuestro programa tiene como misión informar y educar a la comunidad sobre temas importantes que afectan
                nuestras vidas. Buscamos ser una fuente confiable de información y un catalizador para el cambio
                positivo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Nuestra Visión</h2>
              <p className="text-muted-foreground text-center">
                Nuestra visión es crear una sociedad más informada y empoderada, donde las personas tengan acceso a la
                información necesaria para tomar decisiones conscientes y participar activamente en la transformación de
                sus comunidades.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Nuestro Logotipo</h2>
            <div className="flex justify-center mb-8">
              <img src="/src/assets/img/logo.jpeg" alt="Logo" width={96} height={96} className="w-24 h-24" />
            </div>
            <p className="text-muted-foreground text-center">
              Nuestro logotipo representa los valores de nuestra organización: la unión, la diversidad y el compromiso
              con el cambio positivo. Las formas entrelazadas simbolizan la conexión entre las personas y la comunidad.
            </p>
          </div>
        </section>
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Objetivos de la Aplicación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-center">Informar y Educar</h3>
                <p className="text-muted-foreground text-center">
                  Proporcionar información precisa y actualizada sobre temas relevantes para la comunidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-center">Facilitar el Diálogo</h3>
                <p className="text-muted-foreground text-center">
                  Crear un espacio seguro y constructivo para que las personas puedan compartir ideas y debatir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-center">Promover el Cambio</h3>
                <p className="text-muted-foreground text-center">
                  Inspirar y empoderar a los usuarios para que se involucren en la transformación de sus comunidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
