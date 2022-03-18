import { useState } from "react";


const Recipes = () => {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        let increment = counter + 1;
        setCounter(increment);
    }

    const resetCounter = () => {
        setCounter(0);
    }



    return (
        <div>
            <button onClick={updateCounter}>Update counter {counter}</button>
            <button onClick={resetCounter}>Reset counter</button>
            <ul>
                <li>Bitcoin</li>
                <li>Ripple</li>
                <li>Ethereum</li>
            </ul>

        </div>


    )
}

export default Recipes;