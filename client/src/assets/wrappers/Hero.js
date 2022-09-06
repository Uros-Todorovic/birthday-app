import styled from "styled-components";
import img from "../images/cupkake3.jpg";

const Wrapper = styled.div`
  .hero {
    height: 40vh;
    background: url(${img}) center/cover no-repeat;
    margin-bottom: 2rem;
    border-radius: var(--borderRadius);
    position: relative;
  }
  .hero-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: var(--borderRadius);
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .hero-text {
    text-align: center;
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    .hero-text h1 {
      font-size: 4rem;
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
