import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import CarouselLocal from './components/CarouselLocal';
function App() {
  return (
    <div className="App d-flex  flex-column justify-content-center">
      <div>
        <h1> Proximamente</h1>

      </div>
      <div>
        <Card imagen="https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/02/728961._SX1280_QL80_TTD_-300x461.jpg"
          titulo="Return of Wolverine"
          descripcion="Wolverine regresa a la vida de la mano de Tanos."
          puntaje="*****"

        />
      </div>
      <h2>Spoiler Alert</h2>
      <div>
        <CarouselLocal />
      </div>
    </div>
  );
}

export default App;
