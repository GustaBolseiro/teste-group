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
        <div className="">
            <div className="flex flex-col justify-content">
                <h2>Clique no botão para adicionar ou retirar um número!</h2>
                 <h2 className="flex flex-row justify-center p-2">{value}</h2>
                <button onClick={increment} className="bg-redGpan text-white p-2 rounded-2xl font-bold"
                >ADICIONAR</button>
            <div className="p-2">
            </div>
                <button onClick={decrement} className="bg-redGpan text-white p-2 rounded-2xl font-bold"
                >SUBTRAIR</button>
            </div>
        </div>
        
    );
};

export default CounterFunction;