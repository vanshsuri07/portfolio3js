import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {name, value}}) =>  {
        setForm({...form, [name]: value}
        )
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{

        emailjs.send(
            'service_19wo8jk',
            'template_6njmopl',
            {
                from_name:form.name,
                to_name:'Vansh',
                from_email:form.email,
                to_email:'vanshsuri75@gmail.com',
                message:form.message
            },
            'Nel4L1LyUBZ2sR3pD'
            )
        setLoading(false);
            alert('Your message has been sent successfully')
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }catch(error){
            setLoading(false);
            console.log(error)
            alert('Something went wrong')
        }

    }
    return (
        <section className="c-space my-20">
            <div className="relative  flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text my-7">Lets's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you are looking for a developer, designer, or just want to say hi, I'm always happy to chat.'
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}
                    className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">FullName</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="William Son"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="WilliamSon@gmail.com"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I wanna give you a job..."
                        />
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending' : "Send Message" }
                    <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow" />
                    </button>
                    </form>
                </div>
            </div>


        </section>
    )
}
export default Contact
