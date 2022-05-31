import React, {useEffect, useState} from 'react';
import {UseTypedSelector} from "../hooks/useTypedSelector";
import {fetchTodos, setTodosPage} from "../action-creators/todos";
import {UseActions} from "../hooks/useActions";

const TodosList: React.FC = () => {
    const {todos, isLoading, error, page, limit} = UseTypedSelector(state => state.todos)
    const {fetchTodos, setTodosPage} = UseActions();
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(limit, page)
    }, [page])

    if (isLoading) return <div>Загрузка....</div>

    if (error) return <div>{error}</div>

    return (
        <div style={{marginTop: "30px"}}>
            <div>
                {todos.length > 0 &&
                    <div>
                        {todos.map(todo => <div key={todo.id}>
                                <span>{todo.id}</span> -
                                <span>{todo.title}</span>
                            </div>
                        )}
                    </div>
                }
            </div>
            <div style={{marginTop: "20px", textAlign: 'center'}}>
                {pages.map((p, i) =>
                    <span
                        onClick={() => setTodosPage(p)}
                        style={{border: p === page ? '1px solid red' : '1px solid black', padding: '10px'}}
                        key={i}>
                        {p}
                    </span>)}
            </div>
        </div>
    );
}

export default TodosList;
