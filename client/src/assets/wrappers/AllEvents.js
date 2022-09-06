import styled from "styled-components";

const Wrapper = styled.div`
  .filter-event-button {
    margin-bottom: 2rem;
  }
  .filter-event-button:last-of-type {
    margin-left: 0.4rem;
  }

  .single-event header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
  }

  .single-event header div {
    height: 2px;
    background-color: var(--grey-200);
  }

  .single-event header p {
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0;
  }

  .single-event > p a {
    color: var(--grey-500);
  }

  .btn-single-event {
    background-color: var(--happy-secondary);
  }
`;

export default Wrapper;
