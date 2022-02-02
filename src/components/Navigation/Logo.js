import LogoIcon from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      {/* <i className="fas fa-record-vinyl"></i> */}
      <img src={LogoIcon} alt="Logo" />
      <h1>Vinylecommerce</h1>
    </div>
  );
}
