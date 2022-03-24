import React from "react";
import './modal.css';

export const Modal=({children})=>(
    <section className="modalBackground">
        {children}
    </section>

)
export default Modal;

export const ModalContent=({children})=>{
    
    return(<div className="modalBox">
        {children}
    </div>)
}

export const ModalIcons=({path})=>{
    return(
        <img ref={path} alt="icon modale"></img >
    )
}
//exemple 


/*import React from "react";
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;*/