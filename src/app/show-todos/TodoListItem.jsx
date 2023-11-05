"use client"
import React, {useState} from 'react';

const TodoListItem = ({ item }) => {
  const [name, setName] = useState(item.name)
  const [isFinished, setIsFinished] = useState(item.isFinished)


  return (
    <li className='task-item'>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type='checkbox'
        value={isFinished}
        onChange={e => setIsFinished(e.target.value)} />
    </li>

  )
}

export default TodoListItem; 