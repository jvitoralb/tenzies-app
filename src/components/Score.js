import React from 'react';


const Score = ({ gameStatus, matchAll, gameScore }) => (
    <React.Fragment>
        {
            gameStatus.started &&
            <div className='stats'>
                <p>{`Clicks: ${gameScore.count}`}</p>
                <p>{`Time: ${gameScore.timer}s`}</p>
            </div>
        }
        {
            !matchAll() &&
            <p className='warning'>
                Values Selected do not match!
            </p>
        }
    </React.Fragment>
);

export default Score;