import React from 'react';
import Tenzi from './components/Tenzi';
import './components/Styling/styles.css'


const App = () => {
    const [gameStatus, setGameStatus] = React.useState({
        started: false,
        finished: false,
        count: 0
    });
    const [gameDices, setGameDices] = React.useState({
        dices: [],
        hold: []
    });

    /**
     *  Add a timer
     *  May be better to change started and finished for a solo string
    **/
    const randomNum = () => Math.ceil(Math.random() * 6);
    const matchDies = () => gameDices.hold.every((dice, index, arr) => dice.value === arr[0].value);
    const addClick = () => {
        setGameStatus(prevState => ({
            ...prevState,
            count: prevState.count + 1
        }));
    }

    React.useEffect(() => {
        let dicesTrack = (gameDices.dices.length && gameDices.dices.every(dice => dice.die));

        if (dicesTrack && matchDies()) {
            setGameStatus(prevStatus => ({
                ...prevStatus,
                finished: true,
                started: false
            }));
            return console.log('Well Done!');
        }
    }, [gameDices.dices]);

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
                hold: newDices.filter(dice => dice.die)
            }
        });

        addClick()
    }

    const submitDies = () => {
        addClick()

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
                started: true,
                count: 0
            }));
            return getDices();
        }

        return submitDies();
    }

    return (
        <React.Fragment>
            <header>
                <h1 className='title'>Tenzies App</h1>
            </header>
            <main>
                <section className='app-sec'>
                    <p>{gameStatus.started && `Clicks: ${gameStatus.count}`}</p>
                    <p className='stats-click'>
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
                </section>
            </main>
        </React.Fragment>
    );
}

export default App;