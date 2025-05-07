import { Link } from "react-router-dom"

export const Buttons = () => {
    return(
        <div className="fixed bottom-0 left-0 w-full bg-redGpan border-t border-gray-300 z-50 flex justify-around items-center py-3">
            <Link 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              to={'/'}
            >
              Home
            </Link>
            <Link 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              to={'/produtos'}
            >
              Produtos
            </Link>
            <Link
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              to={'/usuarios'}
            >
              Usuários
            </Link>
            <Link
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              to={'/dados'}
            >
              Dados
            </Link>
            </div>
    )
}