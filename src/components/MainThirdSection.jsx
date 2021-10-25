import { useState } from "react";
import ContactForm from "./ContactForm"

const MainThirdSection = () => {

     //FORM START
     const [nameInput, setNameInput] = useState('');
     const [emailInput, setEmailInput] = useState('');
     const [textArea, setTextArea] = useState('');
 
     const setNameInputValue = (event) => {
         setNameInput(event.target.value);
     }
 
     const setEmailInputValue = (event) => {
         setEmailInput(event.target.value);
     }
 
     const setTextAreaValue = (event) => {
         setTextArea(event.target.value);
     }
 
     const submitForm = () => {
         if (nameInput !== '' && emailInput !== '' && textArea !== '') {
             alert(`Form submitted successfully! \r\n Name: ${nameInput} \r\n Email: ${emailInput} \r\n Text: ${textArea}`);
         }
     }
     //FORM END
    
    return(
        <div className="thirdSection">
                <h1>Contact</h1>
                <div className="separator"></div>
                <div className="thirdSectionContainer">
                    <div className="thirdSectionLeftSide">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='spaceBetweenParagraphs'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='spaceBetweenParagraphs'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="thirdSectionRightSide">
                        <ContactForm
                            submitForm={submitForm}
                            setNameInputValue={setNameInputValue}
                            setEmailInputValue={setEmailInputValue}
                            setTextAreaValue={setTextAreaValue}
                        />
                    </div>
                </div>
            </div>
    )
}

export default MainThirdSection;