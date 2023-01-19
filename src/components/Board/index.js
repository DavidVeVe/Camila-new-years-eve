import React, {useState} from 'react'
import Card from '../Card'
import './Board.css'

function Board (){
    const wishes= [
        {cardContent: {title: 'Salud', text: 'Voy a sonar a señor peeeeeero... De verdad te deseo buena salud. Sin salud no puedes hacer nada. Cuida mucho de tu salud. Fisica, emocional, mental. Respira y atiendete, aprovecha que estas joven y haz prevencion medica. :flushed'} },
        {cardContent: {title: 'Crecimiento', text: 'Todos somos maestros y aprendices porque todos tenemos algo por enseñar pero también tenemos mucho que aprender. Busca, investiga, experimenta, indaga que es lo que te gusta hacer, cuales son tus habilidades y cuales son tus oportunidades de mejora y con base a eso crea un sistema de habitos que te permitan llegar a donde quieres llegar, a ser quien quieres ser y no olvides de disfrutar cada momento. Tampoco olvides que no todo te lo da la escuela o la universidad, si quieres ser mejor tienes que buscar por tu cuenta y la vida misma también enseña mucho. Aprovecha todas las oportunidades y todas las facilidades que tienes, de verdad que muchos quisieran tener las oportunidades que personas como tu o yo hemos tenido. Lo digo en buena onda, con buena intención. En mi opinion tienes todo para "triunfar y ser exitosa" al final eso es subjetivo, por eso lo pongo entre comillas. Por el lado personal, cada quien tiene sus metodos, lo unico que te recomendaria es hacer introspección e intentar mejorar tu version a diario pero es solo mi opinion o recomendación.'} },
        {cardContent: {title: 'Salsa Verde', text: 'Salsa Verde... No tengo mucho que decir a cerca de tu mal gusto por no comer salsa verde (es broma). Que comas las carnes en su jugo, rojas, mas ricas siempre. Se que no es como un deseo pero me acorde :D. '} },
        {cardContent: {title: 'Maruchan con catsup', text: 'No pude con la salsa verde, mucho menos con la maruchan con catsup. Aunque no la he probado, ya que la pruebe te cuento mi opinion. Por lo pronto te deseo que pruebes un lonchecito de firjoles fritos con mayonesa. Pff riquisimo!!!!.'} },
        {cardContent: {title: 'Cloro', text: 'Por favor, si vas a tomar prende la luuuuz!!! o no tomes en recipientes que pueden guardar cloro jaja. O huele antes que es lo que te vas a tomar. Solo ponte trucha por favor. Ah! y recuerda que si ya tomaste cloro no tomes agua :D :*.'} },
        {cardContent: {title: 'Cagüamas', text: 'Deseo que tengas todas las cagüamitas que desees (ni te gustan). Que te llenes de buenas vibras con las personas que quieres, un buen cotorreo y unas cervezas bien heladas. Siempre cuidate mucho.'} },
        {cardContent: {title: 'Rodillas', text: 'Cuidate, operate tu rodilla, no lo dejes pasar. Aprovecha ahorita que estas "joven" y puedes sanar mas rapido y la libras mas facil, no lo dejes pasar. Cuidate mucho tus rodillas y cuidate mucho tu.'} },
        {cardContent: {title: 'Familia', text: 'Deseo que tengas la mejor relación con tu familia, como hermana, como hija, como prima, como sobrina, cuñada, lo que sea. Tu te conoces mas que nadie y sabes que te hace bien o que te hace mal. Evalua y toma tus decisiones para que estes bien tu. si estas bien tu, puedes aportar a los demas. (No soy la mejor persona para dar consejos, pero siento que es cierto jeje).'}},
        {cardContent: {title: 'Tú', text: 'Trabaja en ti. Todos necesitamos ayuda profesional, siempre o en algun punto especifico de nuestras vidas. No soy nadie como para venir y decirte que hacer, simplemente de verdad quiero que estes bien. Creo que tenemos en común que somos personas con un caracter dificil, por eso aveces te entiendo. Somos explosivos, somos de mecha corta, tomamos decisiones muchas veces sin pensarlas bien. Por ese lado te entiendo pero también considero que tenemos que hacer mas introspección, tanto tu como yo (que son las personas que me interesan en este momento) para analizar bien como estan los pedos por los que cada uno esta pasando y tratar de arreglarlos, ir mejorando gradualmente, con poquito que sea a diario es un gran avance a largo plazo.'} }
        ]

    const [cards, setCards] = useState(wishes)
    const [isCardActive, setIsCardActive] = useState(false)

    const clickHandler = (index) => {
        const cardsCopy = [...cards]
        cardsCopy[index].isActive = !cardsCopy[index].isActive
        setCards(cardsCopy)
    }

    const Cards = cards.map((wish, index) => {
        const {cardContent = '', isActive = false} = wish;
        return <Card key={index} wishNumber={index + 1} cardContent={cardContent} onClick={() => clickHandler(index)} isActive={isActive} isCardActive={isCardActive} setIsCardActive={setIsCardActive} />
    });

    return <div className="board">
        {Cards}
    </div>
}

export default Board
