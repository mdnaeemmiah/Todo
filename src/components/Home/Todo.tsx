'use client';
import React, { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<{ id: number; text: string; editing: boolean }[]>([]);

  const handleAdd = () => {
    if (text.trim() === '') return;

    setTodos([...todos, { id: Date.now(), text, editing: false }]);
    setText('');
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdate = (id: number, newText: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  const toggleEdit = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto' }}>
      <h2>📝 Todo List</h2>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a todo..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleAdd} style={{ padding: '8px 16px' }}>
          Add
        </button>
      </div>

      <ul style={{ marginTop: '20px', paddingLeft: '0' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
            {todo.editing ? (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => handleUpdate(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => toggleEdit(todo.id)} style={{ marginLeft: '10px' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '5px' }}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
