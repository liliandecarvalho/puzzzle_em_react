import './style.css';
import CardBack from '../../assets/1.png';

function Card({ card, stateCards, setStateCards }) {

    function handleTurnCard() {
        const localCards = [...stateCards];

        const currentCard = localCards.find((item) => item.id === card.id);

        const onlyTurnedCards = localCards.filter((item) => item.turned);

        if (onlyTurnedCards.length > 1) {
            return;
        }

        if (onlyTurnedCards.length && card.slug === onlyTurnedCards[0].slug) {
            currentCard.turned = !currentCard.turned;
            setStateCards(localCards);

            setTimeout(() => {
                handleClearCards(currentCard, onlyTurnedCards[0], localCards);
            }, 800);

            return;
        }

        currentCard.turned = !currentCard.turned;
        setStateCards(localCards);

        if (onlyTurnedCards.length) {
            setTimeout(() => {
                localCards.forEach((item) => {
                    item.turned = false;
                });

                setStateCards([...localCards]);
            }, 1500);
        }

    }

    function handleClearCards(card1, card2, localCards) {
        if (card1.id === card2.id) {
            return;
        }

        const filteredCards = localCards.filter((item) =>
            item.id !== card1.id && item.id !== card2.id);

        setStateCards(filteredCards);
    }

    return (
        <img
            className='card'
            src={card.turned ? card.image : CardBack}
            alt='card'
            onClick={() => handleTurnCard()}
        />
    )
}

export default Card;