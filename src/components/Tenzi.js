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
            <p>Time {'do:it'.toLocaleUpperCase()}</p>
        </div>
    );

    return (
        <React.Fragment>
            {   
                (status.started || status.finished) &&
                <div className='dices'>
                    {(status.finished && !status.started) ? endGame : playDices}
                </div>
            }
        </React.Fragment>
    );
}

export default Tenzi;