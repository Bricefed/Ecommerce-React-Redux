import Left from "../../assets/imgs/left.png";
import Right from "../../assets/imgs/right.png";

export default function Arrow({ moveSlide, direction }) {
  return (
    <button
      className={direction === "next" ? "arrow next" : "arrow prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? Right : Left} alt="Flèche" />
    </button>
  );
}
