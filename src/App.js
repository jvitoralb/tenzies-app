import React from 'react';


const App = () => {
    const [diceState, setDiceState] = React.useState({
        playing: false,
        dices: []
    });

    const randomNum = () => Math.ceil(Math.random() * 6);

    const getDices = () => {
        let newArr = [];
        for(let i = 0; i < 10; i++) {
            let dice = {
                value: randomNum(),
                die: false,
                id: `${i + 1}`
            }
            newArr.push(dice);
        }
        setDiceState(prevState => ({
            ...prevState,
            dices: [...newArr]
        }));
    }

    const dieHandler = (e) => {
        const { id, value } = e.target;

        setDiceState(prevState => ({
            ...prevState,
            dices: prevState.dices.map(dice => {
                return dice.id === id ? {
                    ...dice,
                    die: !dice.die
                } : dice
            })
        }));
    }

    const submitDies = () => {
        let matchValues = diceState.dices.filter(dice => dice.die)
        .every((dice, index, arr) => dice.value === arr[0].value);

        if (!matchValues) {
            return console.log('Values selected do not match!');
        }

        setDiceState(prevState => ({
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
        if (!diceState.playing) {
            console.log('start playing  ')
            setDiceState(prevState => ({
                ...prevState,
                playing: true
            }));
            return getDices();
        }
        console.log('roll')
        return submitDies();
    }

    return(
        <React.Fragment>
            <h1>Tenzies App</h1>
            {
                diceState.dices.map((obj, idx) => (
                    <React.Fragment key={idx}>
                        <button id={obj.id}
                            value={obj.value}
                            onClick={dieHandler}
                            style={{backgroundColor: obj.die && 'aliceblue'}}
                        >
                            {obj.value}
                        </button>
                    </React.Fragment>
                ))
            }
            <button onClick={startRoll}>
                {!diceState.playing ? 'Start Playing' : 'Roll'}
            </button>
        </React.Fragment>
    );
}

export default App;