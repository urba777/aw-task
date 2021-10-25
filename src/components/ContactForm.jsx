const ContactForm = props => {

    return (
        <form onSubmit={props.submitForm}>
            <h3>Name</h3>
            <input type='text' required onChange={props.setNameInputValue}></input>
            <h3>Email</h3>
            <input placeholder="test@test.com" type='email' required onChange={props.setEmailInputValue}></input>
            <h3>Message</h3>
            <textarea required onChange={props.setTextAreaValue}></textarea>
            <button className="submitButton" type="submit">LEARN MORE</button>
        </form>
    )
}

export default ContactForm;