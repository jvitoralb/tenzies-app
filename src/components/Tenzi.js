import React from 'react';


const Tenzi = ({ game, status, clickCount, setGame }) => {
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
            style={{backgroundColor: obj.die && 'aliceblue'}} // Make this a class with conditional
        >
            {obj.value}
        </button>
    ));
    const endGame = (
        <div className='end-game'>
            <h3>Well Done!</h3>
            <p>Clicks {status.count}</p>
            <p>Time {status.timer}s</p>
        </div>
    );

    const display = {
        'start': playDices,
        'finish': endGame
    }

    return (
        <React.Fragment>
            {
                display[status.status] &&
                <div className='dices'>
                    {display[status.status]}
                </div>
            }
        </React.Fragment>
    );
}

export default Tenzi;