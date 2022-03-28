import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal, {ModalContent,ModalExit,ModalIcons,ModalTittle,ModalText} from "./lib/index";
import './index.css'



const App = () =>{
    const [etatDisplay,setEtatDisplay]=useState(false)

    return(
        <div className="divBack">
            <p>Hello</p>
            <button type="button" onClick={()=>setEtatDisplay(!etatDisplay)}>click ici</button>
            {etatDisplay && <Modal >
                    <ModalContent type={"information"}>
                        <ModalTittle>Tittle<ModalIcons type={"information"}/></ModalTittle>
                        <ModalText>informative text </ModalText>
                        <ModalExit etat={etatDisplay} set={setEtatDisplay}>button exit</ModalExit>
                    </ModalContent>
                </Modal>
            }
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));