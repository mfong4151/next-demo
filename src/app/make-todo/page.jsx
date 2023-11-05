import Layout from '@/components/Layout';
import React from 'react';
import MakeTodoForm from './MakeTodoForm';

const MakeTodo = () => {


  return (
    <Layout>
      <h1>
        Heres where you make todos
      </h1>
      <MakeTodoForm/>
      
    </Layout>
  );
};

export default MakeTodo;