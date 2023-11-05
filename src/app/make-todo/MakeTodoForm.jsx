"use client";
import { createNewTodo } from '@/database/serverAction';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MakeTodoForm = () => {
    const [todo, setTodo] = useState('')
    const [errors, setErrors] = useState([])
    const router = useRouter()

    const formAction = async (formData) => {
        const data = Object.fromEntries(formData)
        const res = await createNewTodo(data);
        
        if (!todo.length) {
            setErrors(['No empty form bhenchod'])
            return
        }

        if (res?.errors) {
            setErrors(["We messed up"])
        } else {
            
            router.push('/show-todos')
        }
    };

    // Clear the errors array, every time i edit my todo
    useEffect(() => {
        setErrors([])

    }, [todo])

    return (
        <>
            <form action={formAction}>
                <label htmlFor="name">

                    Make a new todo
                </label>
                <input id="name" name='name' type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

            <ul>
                {!!errors.length &&
                    errors.map((err, idx) =>
                        <li key={idx}>{err}</li>
                    )
                }
            </ul>
        </>
    );
};

export default MakeTodoForm;