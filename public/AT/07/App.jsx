import React from 'react';
import CardFuncionario from './components/CardFuncionario';

const funcionario = {
  nomeCompleto: "Fulano de Tal",
  dataNascimento: "15/05/1985",
  setor: "TI",
  cargo: "Desenvolvedor Senior",
  telefone: "+55 11 99999-9999",
  email: "fulano.de.tal@empresa.com"
};

const tarefas = [
  { nome: "Tarefa 1", concluida: true },
  { nome: "Tarefa 2", concluida: false },
  { nome: "Tarefa 3", concluida: false }
];

function App() {
  return (
    <div className="App">
      <CardFuncionario funcionario={funcionario} tarefas={tarefas} />
    </div>
  );
}

export default App;