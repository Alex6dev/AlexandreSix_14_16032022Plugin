'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalText = exports.ModalTittle = exports.ModalIcons = exports.ModalExit = exports.ModalContent = undefined;

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
exports.ModalContent = _Modal.ModalContent;
exports.ModalExit = _Modal.ModalExit;
exports.ModalIcons = _Modal.ModalIcons;
exports.ModalTittle = _Modal.ModalTittle;
exports.ModalText = _Modal.ModalText;

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