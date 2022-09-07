import React from 'react';


const Tenzi = ({ game, dieHandler }) => (
    <React.Fragment>
        {game.dices.map((obj, idx) => (
            <React.Fragment key={idx}>
                <button id={obj.id}
                    value={obj.value}
                    onClick={dieHandler}
                    style={{backgroundColor: obj.die && 'aliceblue'}}
                >
                    {obj.value}
                </button>
            </React.Fragment>
        ))}
    </React.Fragment>
);

export default Tenzi;