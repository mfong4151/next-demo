//Usually we have some sort of databasing library ORM, like Prisma in the case of Redmoon
import { PrismaClient } from "@prisma/client";

//Implements the Prisma client as a singleton, so that when the project hot reloads it doesn't create multiple instances of the server


const globalForPrisma = global

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma





export const createTodo = async (data) => {
  const newTodo = await prisma.todo.create({
   data 
  });
  return newTodo;
};



export const getAllTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export const getTodoById = async (id) => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  return todo;
};


export const updateTodo = async (id, name, isFinished) => {
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { name, isFinished },
  });
  return updatedTodo;
};


export const deleteTodo = async (id) => {
  const deletedTodo = await prisma.todo.delete({
    where: { id },
  });
  return deletedTodo;
};

