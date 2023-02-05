import './style.css';
import Sidebar from '../../componentes/Sidebar';
import Card from '../../componentes/Card';
import cards from '../../cards';
import { useState } from 'react';
import CongratsImage from '../../assets/congrats.png';

function Main() {
    const [stateCards, setStateCards] = useState([...cards]);

    return (
        <div className='container'>
            <Sidebar
                cards={cards}
                setStateCards={setStateCards}
            />

            <div className='container-main'>
                <div
                    className='container-cards'
                    style={{ 'justifyContent': `${stateCards.length ? 'flex-start' : 'center'}` }}
                >
                    {stateCards.length ?
                        stateCards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                stateCards={stateCards}
                                setStateCards={setStateCards}
                            />
                        ))
                        :
                        <img src={CongratsImage} alt="parabéns" />
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;