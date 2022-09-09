import React from 'react';


const Status = ({ allStats }) => {


    return (
        <React.Fragment>
            {
                allStats.started && 
                <React.Fragment>
                    <p className='stats-click'>
                        {`Clicks: ${allStats.count}`}
                    </p>
                    <p>{`Time: ${allStats.timer}s`}</p>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Status;