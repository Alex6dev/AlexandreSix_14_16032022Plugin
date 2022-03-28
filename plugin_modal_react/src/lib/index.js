import Modal from './components/Modal';
import { ModalContent,ModalExit,ModalIcons,ModalTittle,ModalText} from './components/Modal';
export default Modal
export{ModalContent,ModalExit,ModalIcons,ModalTittle,ModalText}

/*exemple

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
*/
