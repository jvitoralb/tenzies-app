import React from 'react';


const Tenzi = ({ game, gameStatus, clickCount, setGame }) => {
    const holdDie = (e) => {
        const { id } = e.target;

        setGame(prevState => {
            const newDices = prevState.dices.map(dice => {
                return dice.id === id ? {
                    ...dice,
                    die: !dice.die
                } : dice
            });

            return {
                ...prevState,
                dices: newDices,
                hold: newDices.filter(dice => dice.die)
            }
        });

        clickCount();
    }

    const playDices = game.dices.map((obj, idx) => (
        <button key={idx}
            id={obj.id}
            value={obj.value}
            onClick={holdDie}
            className={obj.die ? 'hold' : undefined}
        >
            {obj.value}
        </button>
    ));

    return (
        <React.Fragment>
            {
                gameStatus.started &&
                <div className='dices'>
                    {playDices}
                </div>
            }
        </React.Fragment>
    );
}

export default Tenzi;