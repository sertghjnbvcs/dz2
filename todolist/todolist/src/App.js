import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from "./components/List/List";
import Input from "./components/Input/Input";
function App() {
    const [ show, setShow ] = useState(false)
    const [list, setList ] = useState([  {
        id:1 ,
        task: 'coding'
    },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }])
    const handleShow  = () => setShow(!show)
    const [search, setSearch] =useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    return (
        <div className="App">
            {show && <Modal
                handleShow={handleShow} handleSearch={handleSearch}/>}
            <Input handleSearch={handleSearch} name={'mainSearch'} placeholder={'поиск'}/>
            <Button handleClick={handleShow}>
                Открыть модалку
            </Button>
            <List list={list} />

        </div>
    );
}

export default App;
