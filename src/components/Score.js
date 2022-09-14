import React from 'react';


const Score = ({ gameStatus, gameScore }) => (
    <React.Fragment>
        {
            gameStatus.started &&
            <div className='stats'>
                <p>{`Clicks: ${gameScore.count}`}</p>
                <p>{`Time: ${gameScore.timer}s`}</p>
            </div>
        }
    </React.Fragment>
);

export default Score;