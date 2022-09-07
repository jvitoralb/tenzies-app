import React from 'react';
import Tenzi from './components/Tenzi';


const App = () => {
    const [gameStatus, setGameStatus] = React.useState({
        started: false,
        finished: false
    })
    const [gameDices, setGameDices] = React.useState({
        dices: [],
        holdDices: []
    });

    /**
     *  Add a count for how many times Roll was clicked
     *  Also add a timer and a congrats for finishing and reseting the game
     *  Finish the game as soon as the last one is clicked
    **/
    const randomNum = () => Math.ceil(Math.random() * 6);
    const matchDies = () => gameDices.holdDices.every((dice, index, arr) => dice.value === arr[0].value);

    React.useEffect(() => {
        let gameTrack = gameDices.dices.every(dice => dice.die)

        if (gameTrack) {
            setGameStatus(({
                finished: true,
                started: false
            }));
            return console.log('Well Done!')
        }
    }, [gameDices.dices])

    const getDices = () => {
        let newArr = [];
        for(let i = 0; i < 10; i++) {
            newArr.push({
                id: `${i + 1}`,
                die: false,
                value: randomNum()
            });
        }
        setGameDices(prevState => ({
            ...prevState,
            dices: [...newArr]
        }));
    }

    const holdDie = (e) => {
        const { id } = e.target;

        setGameDices(prevState => {
            const newDices = prevState.dices.map(dice => dice.id === id ? {
                ...dice,
                die: !dice.die
            } : dice);

            return {
                ...prevState,
                dices: newDices,
                holdDices: newDices.filter(dice => dice.die)
            }
        });
    }

    const submitDies = () => {
        if (!matchDies()) {
            return console.log('Values selected do not match!');
        }
        setGameDices(prevState => ({
            ...prevState,
            dices: prevState.dices.map(dice => {
                return  !dice.die ? {
                    ...dice,
                    value: randomNum()
                } : dice
            })
        }));
    }

    const startRoll = () => {
        if (!gameStatus.started) {
            setGameStatus(prevStatus => ({
                ...prevStatus,
                started: true
            }))
            return getDices();
        }
        return submitDies();
    }

    return(
        <React.Fragment>
            <h1>Tenzies App</h1>
            <p>
                {!matchDies() && 'Values Selected do not match!'}
            </p>
            <Tenzi
                game={gameDices}
                status={gameStatus}
                dieHandler={holdDie}
            />
            <button onClick={startRoll}>
                {!gameStatus.started ? 'Start Playing' : 'Roll'}
            </button>
        </React.Fragment>
    );
}

export default App;