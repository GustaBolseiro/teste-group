import { useState } from "react";

const CounterFunction = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setValue(prevCount => prevCount - 1);
        if (value === 0){
            setValue(0)
        };
    };

    return (
        <div className="flex justify-content items-center">
            <div className="flex flex-col justify-content">
                <h2>Clique no botão para adicionar ou retirar um número!</h2>
                <h2>{value}</h2>
                <button onClick={increment}>+ ADICIONAR</button>
            <div>
            </div>
                <button onClick={decrement}>- SUBTRAIR</button>
            </div>
        </div>
        
    );
};

export default CounterFunction;