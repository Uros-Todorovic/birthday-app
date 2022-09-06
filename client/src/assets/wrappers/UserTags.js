import styled from "styled-components";

const Wrapper = styled.div`
  .tags-container {
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }

  .tags-container h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .tags-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn-order {
    padding: 0.2rem;
    margin-bottom: 5px;
  }

  .disabled-link {
    pointer-events: none;
  }
`;

export default Wrapper;
