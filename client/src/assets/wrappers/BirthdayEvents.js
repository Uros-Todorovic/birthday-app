import styled from "styled-components";

const Wrapper = styled.div`
  .events-content {
    padding: 3rem 0;
    display: grid;
    gap: 2rem 5rem;
  }

  @media screen and (min-width: 992px) {
    .events-content {
      grid-template-columns: 2fr 1fr;
    }
  }

  .second-column {
    display: grid;
    row-gap: 2rem;
  }

  .events-form {
    width: 100%;
    margin: 0;
  }
`;

export default Wrapper;
