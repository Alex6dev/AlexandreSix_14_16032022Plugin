import React from "react";
import './modal.css';

function getColor(type){
  switch(type){
    case 'warning':
      return'red'
    case'information':
      return'blue'
    case 'success':
      return'green'
  }
}

function getSymbole(type){
  switch(type){
    case 'warning':
      return <i className="fa-solid fa-triangle-exclamation symbole"></i>
    case'information':
      return <i className="fa-solid fa-circle-info symbole"></i>
    case 'success':
      return <i className="fa-solid fa-circle-check symbole"></i>
  }
}

/**show component ModalBackground
* @param {Object} params
* @param {Boolean} params.display
* @returns {JSX}
*/
export const Modal=({children,display=true})=>{
  return display&&(
    <section className={`modalBackground`}>
        {children}
    </section>
  )  
  
}
export default Modal;

/** show box content modal
 * 
 * @param {Object} params
 * @param {String} params.type 
 * @returns {JSX}
 */
export const ModalContent=({children,type})=>{
  let colorModal=getColor(type)
    return(
      <div className={`modalBox ${colorModal}`}>
          {children}
      </div>
    )
}

/** show tittle modal
 * 
 * @param {Object} params 
 * @returns {JSX}
 */
export const ModalTittle=({children})=>{
    return(
      <h2 className="tittleModal">
          {children}
      </h2>
    )
}

/** show icon modal
 * 
 * @param {Object} params
 * @param {String} params.type 
 * @returns {HTML}
 */
export const ModalIcons=({type})=>{
  let symboleModal=getSymbole(type)
    return symboleModal
}

/** show text modal
 * 
 * @param {Object} params
 * @returns {JSX}
 */
export const ModalText=({children})=>{
    return(
      <p className="textModal">
          {children}
      </p>
    )
}

/** show box content modal
 * 
 * @param {Object} params
 * @param {String} params.etat 
 * @param {String} params.set 
 * @returns {JSX}
 */
export const ModalExit=({etat,set,children})=>{

  return(
    <button onClick={()=>set(!etat)} className="button">
      <p>{children} </p>
    </button>
  )
}
