import './App.css';
import {useState, useEffect} from 'react'
import {Fireworks} from "fireworks-js/dist/react";
import Board from './components/Board'

function App() {

    const [inputValue, setInputValue] = useState('')
    const [showContent, setShowContent] = useState(false)
      const options = {
      speed: 3
    }

      const style = {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      background: '#000'
    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
            setShowContent(inputValue === 'Cagüamas para todos')
    }, [inputValue])

    const mainContent = ( showContent &&
        <section>
        <p className="wishes">Mis mejores deseos para ti. <br /> Estos son algunos:</p>
        <Board />
        <p className="final-quoute">No tuve mucho tiempo para hacer esto y hay mucho mas que quisiera decirte. <br/> Mientras tu me decias que este disfrutando, aqui estaba pensando en ti y haciendo esto <span>(despues me terminaste (actualizando a las 6:39 am del 31 de diciembre.). Aclaro que lo comento simplemente para que sepas como son las cosas, nada mas.)</span>. Lo hice pensando en ti a cada momento. Pensando en todo lo que ha pasado, en todo lo que hemos vivido, todas las cosas bonitas, las cosas buenas, cosas malas. Incluso las cosas que pudieran haber pasado en un futuro si siguieramos juntos. <br/> La vida nos da experiencias y aprendizajes. También nos da oportunidades y hay que aprovecharlas. <br/> Aprovecha y valora todo lo que tienes, vive full. <br /><br /> Que tengas un año increible, lleno de sorpresas, cosas nuevas, de aprendizaje, un año lleno de crecimiento pero sobre todo que sea un año en el que seas muy muy muy feliz. <br /><br />  Fue hecho y escrito con mucho amor y con mi corazón sincero.</p>
        <p className="my-name">David Velazquez</p>
    </section>)

  return (
    <div className="App">
      <div className="tittle">
      <h1>2022</h1>
      <h2>Happy New Year, <br /></h2>
          <iframe width="560" height="100" src="https://www.youtube.com/embed/QEuOu_SDtLo?start=1"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
          {!showContent && (<div className="fake-login">
              <p>¿Eres Camila?</p>
              <input value={inputValue} onChange={handleInputValue} type="password"/>
          </div>)
          }
      </div>
        {mainContent}
      <Fireworks options={options} style={style} />
        {showContent
        && <button className="byeBtn" onClick={() => {
            setShowContent(false)
            setInputValue('')
        }}>Feliz Año</button>
        }
    </div>
  );
}

export default App;
