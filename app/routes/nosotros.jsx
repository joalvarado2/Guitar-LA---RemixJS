import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }, 
    {
      rel: 'preload',
      href: imagen,     // funcionalidad para cargar imagenes que puedan ser pesadas "indagar que es preload en css"
      as: 'image'
    }
  ]
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre Nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            turpis et lectus dictum faucibus. Maecenas id ullamcorper diam.
            Donec commodo congue libero eget pulvinar. Etiam ullamcorper libero
            quis magna pellentesque feugiat. Suspendisse condimentum in neque
            non facilisis. Fusce ornare eros vestibulum lacinia lacinia. Nam
            quis leo id nulla volutpat dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            turpis et lectus dictum faucibus. Maecenas id ullamcorper diam.
            Donec commodo congue libero eget pulvinar. Etiam ullamcorper libero
            quis magna pellentesque feugiat. Suspendisse condimentum in neque
            non facilisis. Fusce ornare eros vestibulum lacinia lacinia. Nam
            quis leo id nulla volutpat dignissim.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
