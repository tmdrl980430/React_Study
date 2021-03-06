import React, { useState } from "react";

const ToDos = () => {
    //State는 절대 직접적으로 수정하지 않는다.
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
        console.log(toDos);
    }

    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do,,," />
                <button> Add To Do</button>
            </form>
            <ul>
                {toDos.map((item , index) => <li key={index}>{item}</li>)}
            </ul>

        </div>
    );
}

export default ToDos;