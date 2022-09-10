import React from 'react';


const Score = ({ gameStatus, matchAll }) => (
    <React.Fragment>
        {
            gameStatus.started &&
            <div className='stats'>
                <p>{`Clicks: ${gameStatus.count}`}</p>
                <p>{`Time: ${gameStatus.timer}s`}</p>
            </div>
        }
        <p className='warning'>
            {!matchAll() && 'Values Selected do not match!'}
        </p>
    </React.Fragment>
);

export default Score;