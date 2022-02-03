import { NavLink } from "react-router-dom";
import Picture from "../assets/imgs/about.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="left-content">
        <h2 className="underline">About</h2>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          velit illum, error similique provident maiores deleniti reprehenderit
          fugit. Facilis odio minima, ratione rem sunt eaque officiis doloremque
          accusamus nostrum eveniet voluptatibus necessitatibus molestiae quo!
          Culpa consectetur magni libero aliquam dolore! A minus suscipit omnis
          inventore reprehenderit commodi iure quia. Velit quaerat pariatur
          minus veniam officiis, eos cumque optio vel at enim corporis delectus
          aut ipsum architecto aliquam, quae perferendis corrupti voluptatum in
          deleniti sit quam reiciendis suscipit! Dolor hic amet quasi totam
          maxime tenetur ipsum illo, dolorum corrupti rem obcaecati, optio
          voluptatibus cupiditate ullam. Temporibus vero eaque officiis
          quibusdam sunt.
        </p>
        <NavLink to="/contact" className="btn">
          Nous contactez
        </NavLink>
      </div>
      <div className="right-content">
        <img src={Picture} alt="En savoir plus sur l'entreprise" />
      </div>
    </div>
  );
}
