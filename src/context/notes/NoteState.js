import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const s1 = {
        "name":"vanshita",
        "class":"3rd year"
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setstate({
                "name":"The vanshita Roopchandani",
                "class":"Higher then you for sure"
            });
        }, 4000);
    }
    return(
        <NoteContext.Provider value = {{state ,update}}>
           { props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;