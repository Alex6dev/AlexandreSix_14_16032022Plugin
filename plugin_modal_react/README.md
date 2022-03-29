# AlexandreSix_14_16032022Plugin

## 1- Description

### 1-1 Plugin_modal_react
here is a library allowing to create a react component as a functionality to display a customizable information modal

### 1-2 Visuel modal

- Modal success:
<img src='https://github.com/Alex6dev/AlexandreSix_14_16032022Plugin/plugin_modal_react/blob/main/src/assets/modalsuccess.png' alt="screenshot"/>

- Modal information:
<img src='https://github.com/Alex6dev/AlexandreSix_14_16032022Plugin/plugin_modal_react/blob/main/src/assets/modalsuccess.png' alt="screenshot"/>

- Modal warning:
<img src='https://github.com/Alex6dev/AlexandreSix_14_16032022Plugin/plugin_modal_react/blob/main/src/assets/modalsuccess.png' alt="screenshot"/>

## 2- Project 

### 2-1 Technologies and Prerequisites
- HTML
- CSS
- JS
- [React](https://fr.reactjs.org/)
- Icons [Font Awesome](https://fontawesome.com/)
- FONT[Google Fonts](https://fonts.google.com/)

### 2-2 Launching the project

#### installation in the project
```
$ npm install plugin_modal_react
$ yarn add plugin_modal_react
```

### plugin operation

**Import script in <head>:**
```html
<link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<script src="https://kit.fontawesome.com/569d03ca6c.js" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet">
```

**Import module:**
```jsx
import Modal from 'plugin_modal_react/dist/components/Modal';
import { ModalExit, ModalContent, ModalTittle, ModalIcons, ModalText } from 'plugin_modal_react';
```

**Create your state in your component:**
```jsx
const [etatDisplay,setEtatDisplay]=useState(false)
```

**Render your alert in your component:**
```jsx
    return (
        <>
            {etatDisplay && <Modal >
                    <ModalContent type={"warning"}>
                        <ModalTittle>Tittle<ModalIcons type={"warning"}/></ModalTittle>
                        <ModalText>informative text </ModalText>
                        <ModalExit etat={etatDisplay} set={setEtatDisplay}>button exit</ModalExit>
                    </ModalContent>
                </Modal>
            }
        </>
    )
```

**`<ModalContent/>` params:**
- type: *string* indicates what type of modal we want ` ["information","success","warning"] `

**`<ModalIcons/>` params:**
- type: *string*indicate which icon we want ` ["information","success","warning"] `

**`<ModalExit/>` params:**
- etat: *state* indicates the state of the display state
- set: *function* the function to change the display state

### More about this plugin
To know more about this plugin or on my work, do not hesitate to contact me on my main networks
