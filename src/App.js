import React from 'react';
import Tenzi from './components/Tenzi';
import Score from './components/Score';
import EndGame from './components/EndGame';
import './components/Styling/styles.css';


const App = () => {
    const [gameStatus, setGameStatus] = React.useState({
        started: false,
        status: 'initial'
    });
    const [gameDices, setGameDices] = React.useState({
        dices: [],
        hold: []
    });
    const [score, setScore] = React.useState({
        count: 0,
        timer: 0
    });

    React.useEffect(() => {
        let dicesTrack = (
            gameDices.dices.length &&
            gameDices.dices.every(dice => dice.die) && 
            gameDices.hold.every((dice, index, arr) => dice.value === arr[0].value)
        );

        if (dicesTrack) {
            setGameStatus(({
                started: false,
                status: 'finish'
            }));
        }
    }, [gameDices]);

    React.useEffect(() => {
        let timerInterval;
        if (gameStatus.started) {
            timerInterval = setInterval(() => {
                setScore(prevScore => ({
                    ...prevScore,
                    timer: prevScore.timer + 1
                }));
            }, 1000);
        }
        return () => clearInterval(timerInterval);
    }, [score.timer, gameStatus.started]);

    const matchDies = () => gameDices.hold.every((dice, index, arr) => dice.value === arr[0].value);
    const randomNum = () => Math.ceil(Math.random() * 6);
    const addClick = () => {
        setScore(prevScore => ({
            ...prevScore,
            count: prevScore.count + 1
        }));
    }

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

    const rollDices = () => {
        addClick();

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
            if (gameStatus.status === 'finish') {
                setScore({
                    count: 0,
                    timer: 0
                });
            }
            setGameStatus({
                started: true,
                status: 'start'
            });
            return getDices();
        }

        return rollDices();
    }

    const displayBtn = {
        start: 'Roll',
        finish: 'Play Again',
        initial: 'Start Playing'
    }

    return (
        <React.Fragment>
            <header id='header'>
                <h1 className='title'>Tenzies App</h1>
            </header>
            <main id='main'>
                <section className='app-sec'>
                    <Score
                        gameScore={score}
                        gameStatus={gameStatus}
                        matchAll={matchDies}
                    />
                    <Tenzi
                        game={gameDices}
                        gameStatus={gameStatus}
                        clickCount={addClick}
                        setGame={(changes) => setGameDices(changes)}
                    />
                    <EndGame 
                        gameStatus={gameStatus}
                        gameScore={score}
                    />
                    <button onClick={startRoll}>
                        {displayBtn[gameStatus.status]}
                    </button>
                </section>
            </main>
        </React.Fragment>
    );
}

export default App;