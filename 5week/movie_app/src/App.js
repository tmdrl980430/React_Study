import React, { useEffect, useState } from "react";

const App = () => {
    //State는 절대 직접적으로 수정하지 않는다.
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return;
        }
        setToDo("");
        console.log(toDo);
        toDo
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do,,," />
                <button>Add To Do</button>
            </form>
        </div>
    )
}

export default App;
