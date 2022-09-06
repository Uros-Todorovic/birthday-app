import styled from "styled-components";

const Wrapper = styled.div`
  .user-img {
    /* height: 15rem; */
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
  }

  .user h5 {
    margin-bottom: 0;
    line-height: 1;
    color: var(--grey-700);
  }

  .user p {
    margin-bottom: 3px;
    margin-top: 0.5rem;
    line-height: 1;
    color: var(--grey-500);
    letter-spacing: var(--letterSpacing);
  }

  .btn-start-event {
    background: #8bd3dd;
  }
`;

export default Wrapper;
