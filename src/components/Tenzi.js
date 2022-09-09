import React from 'react';


const Tenzi = ({ game, status, dieHandler }) => {
    const playDices = game.dices.map((obj, idx) => (
        <button key={idx}
            id={obj.id}
            value={obj.value}
            onClick={dieHandler}
            style={{backgroundColor: obj.die && 'aliceblue'}}
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