"use client"
import React, { useState } from 'react'
import Nav from '../Component/Nav'

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [items, setItems] = useState([])

  const AddTodo = () => {

    const item = {
        id: Math.random() * 100,
        value: todo
    }

    setItems((oldList) => [...oldList,  item])
    setTodo("")
  }


  const deleteTodo = (id) => {

    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }


    return (
        <div>
        <Nav/>
        <main className=" h-screen flex justify-center">
            <section className=" flex flex-col gap-1 pt-40 items-center">
                <h1 className=" uppercase py-6 text-5xl font-extrabold">todo list app</h1>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-[550px] px-5 py-1 rounded-lg uppercase  text-xl" placeholder=' Add Todo' />
                <button onClick={AddTodo} className=" bg-emerald-500 w-[550px] px-5 py-1 rounded-lg uppercase text-white text-xl"> add new task</button>
                <ul className="">
                    {
                        items.map(item => {
                            return (
                                <div className="flex gap-8 py-10">
                                 <li className=" border border-emerald-500 p-4 rounded-lg bg-white" key={item.id}>{item.value}</li>
                                 <button onClick={() => deleteTodo(item.id)} className=" bg-red-500 px-4 text-white rounded-lg">Delete</button>
                                </div>
                            )
                        }
                        )
                    }
                </ul>
            </section>
        </main>
    </div>
    )
   
}

export default Todo 











































































/* const [todo, setTodo] = useState("")
    const [items, setItems] = useState([])

    // Helper function

    const addTodo = () => {

        if(!todo){
            alert("Enter item")
            return
        }

        const item = {
            id: Math.random() * 1000000,
            value: todo
        }

        // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setTodo("");
    }


    const deleteTodo = (id) => {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }


  return (
    <div>
        <Nav/>
        <main className=" h-screen flex justify-center">
            <section className=" flex flex-col gap-1 pt-40 items-center">
                <h1 className=" uppercase py-6 text-5xl font-extrabold">todo list app</h1>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-[550px] px-5 py-1 rounded-lg uppercase  text-xl" placeholder=' Add Todo' />
                <button onClick={addTodo} className=" bg-emerald-500 w-[550px] px-5 py-1 rounded-lg uppercase text-white text-xl"> add new task</button>
                <ul className="">
                    {
                        items.map(item => {
                            return (
                                <div className="flex gap-8 py-10">
                                 <li className=" border border-emerald-500 p-4 rounded-lg bg-white" key={item.id}>{item.value}</li>
                                 <button onClick={() => deleteTodo(item.id)} className=" bg-red-500 px-4 text-white rounded-lg">Delete</button>
                                </div>
                            )
                        }
                        )
                    }
                </ul>
            </section>
        </main>
    </div>
  )*/