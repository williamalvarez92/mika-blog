import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
function ContactForm() {
    const [state, handleSubmit] = useForm('mbjwwgqw')
    if (state.succeeded) {
        return <p>Thank you for message!</p>
    }
    return (
        <>
        <form onSubmit={handleSubmit} id='contact-form'>
            <label htmlFor="email">
            Email Address
            </label>
            <input
            id="email"
            type="email" 
            name="email"
            className="formemail"
            placeholder='Email...'
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <br/>
            <label>
            Message</label>
            <textarea
            id="message"
            name="message"
            className="formtext"
            placeholder='Your message...'
            />
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
            <br/>
            {/* <div className="g-recaptcha" data-sitekey="6Lc2vi0dAAAAABi2XG4K40LBQMtXAvYccduL-t0z"></div> */}
            <button type="submit" disabled={state.submitting} className="btn m-3 btn-primary">
            SEND
            </button>
        </form>
        </>
    )
}

export default ContactForm