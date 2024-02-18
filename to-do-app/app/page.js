"use client"

import React from "react";
import { useState } from "react";


const page = () => {

    const[title,settitle] = useState ("");
    const[desc,setdesc] = useState ("");
    const[mainTask,setmainTask] = useState ([]);
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(desc)
        console.log(title)
        setmainTask([...mainTask , {title , desc}]);
        settitle("");
        setdesc("");
    };

    const deleteHandler = (i) => {
        let copytask =[...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)
    }
    let renderTask = <h2 className=" task text-center text-2xl">No Task added</h2>
   
    if(mainTask.length>0){
        renderTask = mainTask.map((t,i) =>{
            return(
                <>
                <li key={i} className=" list flex items-center justify-between mb-8">
                    <div className="box flex items-center justify-between  w-2/3">
                        <h5 className="text-2xl font-semibold">{t.title}</h5>
                        <h6 className="text-lg font-medium">{t.desc} </h6>
                    </div>
                    <button 
                    onClick={()=>{
                        deleteHandler(i)
                    }}
                    className=" delete bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>

                </li>
                 
                <hr/>
                
                </>
            )
        })
    }
    return (
        <>
        <div><h1 className="header bg-black text-white p-6 text-5xl font-bold text-center h-35">To Do List App</h1></div>

        <form onSubmit={submitHandler}>
            <input type="text" 
            className=" input text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
            placeholder="Enter Task here"
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}
            />

            <input type="text" 
            className=" input text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
            placeholder="Enter Description here"
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}
            />

            <button className="button bg-black text-white px-4 py-3 text-2xl font-bold rounded m-8">Add Task

            </button>
        </form>

        <br></br>
        <hr/>
        <div className="  p-8 bg-slate-200">
            <ul>
                {renderTask}
            </ul>
        </div>
        </>
    )
}

export default page