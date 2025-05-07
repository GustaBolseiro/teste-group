import { MainRouter } from "./routes/MainRouter";

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <h1 className="text-3xl font-bold underline">SITE TESTE REACT!</h1>
      <div>
        <MainRouter />
      </div>
    </div>
  );
};

export default App;
