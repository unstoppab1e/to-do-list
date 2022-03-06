import React, {useContext} from "react";
import ListItem from './ListItem'
import { DataContext } from "./DataProvider";

export default function List(){
    const [todos, setTodos] = useContext(DataContext);

    return(
        <ul>
            {
                todos.map((todo, index) =>(
                    <ListItem />
                ))
            }
            
        </ul>
    )
}