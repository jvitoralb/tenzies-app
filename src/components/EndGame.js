import React from 'react';


const EndGame = ({ gameStatus, gameScore }) => (
    <React.Fragment>
        {
            gameStatus.status === 'finish' &&
            <div className='end-game'>
                <h3>Well Done!</h3>
                <p>Clicks {gameScore.count}</p>
                <p>Time {gameScore.timer}s</p>
            </div>
        }
    </React.Fragment>
);

export default EndGame;