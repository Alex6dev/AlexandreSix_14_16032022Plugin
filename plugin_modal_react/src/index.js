import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal,{ ModalContent } from "./lib/component/Modal";
import './index.css'



const App = () =>{
    const [etat,setEtat]=useState(false)
const displayModal=()=>{
    console.log("slt")
    setEtat(!etat)
}
    return(
        <>
        <div className="divBack">
            <p>Hello</p>
            <button type="button" onClick={()=>displayModal()}>click ici</button>
            {etat && <Modal >
                    <ModalContent>
                        <p>slt</p>
                    </ModalContent>
                </Modal>
            }
            
        </div>
        </>
 

    )
}
ReactDOM.render(<App />, document.getElementById("root"));