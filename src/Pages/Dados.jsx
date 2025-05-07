import { useState } from "react";
import { useUsers, createUser, removeUser, updateUser, formEdit } from "../Services/FirebaseFunctions";
import { Buttons } from "../Components/Buttons";

const Dados = () => {
    const [editId, setEditId] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameEdit, setNameEdit] = useState("");
    const [phoneEdit, setPhoneEdit] = useState("");

    // CRIAR USUÁRIO
    const handleCreateUser = async () => {
        if(name === "") return;
        await createUser(name, phone);
        setName('');
        setPhone('');
    };

    // REMOVER USUÁRIO
    const handleRemoveUser = async (id) => {
        await removeUser(id);
    };

    // ATUALIZAR USUÁRIO
    const handleUpdateUser = async (id) => {
        await updateUser(id, nameEdit, phoneEdit)
    };
    
    // PREENCHER CAMPOS COM INFORMAÇÕES JÁ EXISTENTES
    // DE USUÁRIOS QUANDO APERTAR EM EDITAR
    const handleFormEdit = async (id) => {
        const data = await formEdit(id);
        setNameEdit(data.name);
        setPhoneEdit(data.phone);
    };

    // CHAMA A LISTA DE USUÁRIOS CADASTRADOS NO SISTEMA DE FORMA AUTOMÁTICA
    const users = useUsers();

    return(
        <div>
          <h1>DADOS:</h1>
          <ul className="flex flex-col space-y-2"> 
            {users.map(user => (
                <div 
                  className="gap-y-4 border-2 border-gray-800 w-80 mx-auto bg-red-600"
                  key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.phone}</h2>
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleRemoveUser(user.id)}>DELETE</button>
                      {editId === user.id && (
                      <>
                        <input
                          type="text"
                          placeholder="Editar Nome"
                          value={nameEdit}
                          onChange={e => setNameEdit(e.target.value)}
                        />
                        <input
                          type="tel"
                          placeholder="Editar Telefone"
                          value={phoneEdit}
                          onChange={e => setPhoneEdit(e.target.value)}
                        />
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                          onClick={() => {
                            handleUpdateUser(user.id);
                            setEditId(null);
                          }}>
                        SALVAR</button>
                      </>
                    )}
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => {
                      setEditId(user.id)
                      handleFormEdit(user.id);
                    }}>EDITAR</button>
                </div>
            ))}
        </ul>
        <div className="flex justify-center p-2">
        <div className="flex flex-col items-center border-2 border-gray-800 w-80">
          <h1>CRIAR NOVO USUÁRIO</h1>
          <h2>NOME:</h2>
          <input
            className="border-2 border-gray-800"
            type="text"
            value={name}
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <h2>TELEFONE:</h2>
          <input
            className="border-2 border-gray-800"
            type="tel"
            value={phone}
            placeholder="99999-9999"
            onChange={e => setPhone(e.target.value)}
          />
          <div>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handleCreateUser}>ADICIONAR USUÁRIO</button>
          </div>
        </div>
        </div>
        <Buttons/>
    </div>
    );
};

export default Dados;