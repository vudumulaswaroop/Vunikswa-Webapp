const ContactUSForm =() => {
    return (
            <div className="contact-form">
                <form action="" method="POST">
                    <input type="text" name="name" placeholder="Name" className="contact-form-txt" required />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required
                           placeholder="Contact number" maxLength="10" className="contact-form-phone" />
                    <input type="email" name="email" placeholder="Email" className="contact-form-email"
                           required />
                    <textarea placeholder="Your Message" name="message" className="contact-form-txtarea"
                              required></textarea>
                    <input type="submit" value="Submit" name="submit" className="contact-form-btn" />
                </form>
            </div>
    )
};
export default ContactUSForm;
