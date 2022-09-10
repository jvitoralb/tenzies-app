import React from 'react';


const EndGame = ({ gameStatus }) => (
    <React.Fragment>
        {
            gameStatus.status === 'finish' &&
            <div className='end-game'>
                <h3>Well Done!</h3>
                <p>Clicks {gameStatus.count}</p>
                <p>Time {gameStatus.timer}s</p>
            </div>
        }
    </React.Fragment>
);

export default EndGame;