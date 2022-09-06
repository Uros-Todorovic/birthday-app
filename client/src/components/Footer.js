import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  const date = new Date().toString().split(" ").slice(0, 4).join(" ");
  return (
    <Wrapper>
      <footer className="page-footer">
        <p>
          <span className="footer-date">{date}</span>
          &copy; <span className="footer-logo">Birthday App</span>
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
