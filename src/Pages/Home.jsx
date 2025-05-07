import CounterFunction from "../Components/Counter";
import { Buttons } from "../Components/Buttons";

const Home = () => {
    return (
        <div>
            <h1 className="flex flex-row justify-center">SEJA BEM VINDO!!</h1>
            <CounterFunction />
            <Buttons/>
        </div>
    );
};

export default Home;