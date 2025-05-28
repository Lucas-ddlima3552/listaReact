import React, { useState } from 'react';
import Todo from './Todo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('');

  const addTask = () => {
  console.log("Prioridade selecionada:", priority); 

  if (input.trim() !== '' && priority !== '') {
    const newTask = {
      text: input,
      priority: priority,
    };
    setTasks([...tasks, newTask]);
    setInput('');
    setPriority('');
  } else {
    alert('Por favor, preencha a tarefa e selecione uma prioridade.');
  }
};


  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa..."
        />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Selecione a prioridade</option>
        <option value="alta">Alta</option>
        <option value="media">Média</option>
        <option value="baixa">Baixa</option>
      </select>


        <button onClick={addTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task, index, value) => (
          <Todo key={index} task={task} value={value} onRemove={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
