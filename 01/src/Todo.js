function Todo({ task, onRemove }) {
  return (
    <li className={`todo ${task.priority}`}>
      <span>
        {task.text} <small>{task.priority}</small>
      </span>
      <button onClick={onRemove}>Remover</button>
    </li>
  );
  
}
export default Todo;
