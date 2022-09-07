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
        <ul>
            <p>Well Done!</p>
            <li>Your Clicks {status.count}</li>
        </ul>
    );

    return (
        <React.Fragment>
            {/* {endGame} */}
            {(status.finished && !status.started) ? endGame : playDices}
        </React.Fragment>
    );
}

export default Tenzi;