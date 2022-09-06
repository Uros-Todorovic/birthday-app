import styled from "styled-components";

const Wrapper = styled.div`
  .page-footer {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--grey-500);
    color: var(--white);
  }

  .page-footer p {
    margin-bottom: 0;
  }

  .footer-date {
    margin-right: 10px;
  }

  .footer-logo {
    color: var(--happy-secondary);
  }
`;

export default Wrapper;
