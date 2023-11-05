"use server"
import {createTodo} from './index'

export const createNewTodo = async (data) => {


    const newTodo = await createTodo(data)
    
    return newTodo



}