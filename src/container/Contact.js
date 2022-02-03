import Picture from "../assets/imgs/contact.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="left-content">
        <img src={Picture} alt="Contact" />
      </div>
      <div className="right-content">
        <h2 className="underline">Contact</h2>
        <form>
          <div className="input-box">
            <label htmlFor="name">Nom complet</label>
            <input type="text" name="name" id="name" placeholder="Marc Doe" />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="marc@mail.com"
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Votre message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Je vous contacte pour..."
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
