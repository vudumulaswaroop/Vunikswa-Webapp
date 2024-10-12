import ContactUSForm from "./ContactUSForm";

const ContactUS =() => {
    return (
            <div className="contact-in">
                <div className="contact-map">
                    <iframe
                        title="GOOGGLE MAP API"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"
                         allowFullScreen="" loading="lazy"></iframe>
                </div>
                <ContactUSForm />
            </div>
    )
};
export default ContactUS;
