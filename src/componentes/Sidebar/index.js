import './style.css';
import Logo from '../../assets/logo.png';

function Sidebar({ setStateCards, cards }) {

    function handleReset() {

        cards.forEach((card) => {
            card.turned = false;
        });

        cards.sort((card) => Math.random(card) - 0.5);

        setStateCards(cards);
    }

    return (
        <div className='sidebar'>
            <img className='logo' src={Logo} alt="logo" />
            <button
                className='reset-button'
                onClick={() => handleReset()}
            >
                RESET
            </button>
        </div>
    )
}

export default Sidebar;