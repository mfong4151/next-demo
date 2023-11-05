"use server"
import Layout from '@/components/Layout';
import React from 'react';
import { getAllTodos } from '@/database';
import TodoListItem from './TodoListItem';

const ShowTodos = async () => {

  const todos = await getAllTodos()

  return (
    <Layout>

      <h1>
        Heres where you show todos
      </h1>

      <ul>
        {todos.map((todo, idx) =>

          <TodoListItem key={idx} item={todo} />
        )}
      </ul>


    </Layout>
  );

};

export default ShowTodos;
