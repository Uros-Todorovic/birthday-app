import styled from "styled-components";

const Wrapper = styled.div`
  .events-hero {
    display: grid;
    gap: 3rem;
  }

  .events-hero-img {
    border-radius: var(--borderRadius);
  }

  .events-info p {
    color: var(--grey-600);
  }

  .events-wishlist {
    display: flex;
    align-items: center;
    flex: wrap;
  }

  .wishlist-tag {
    margin: 0 0.25rem;
    text-transform: capitalize;
    background-color: var(--happy-secondary);
  }

  .events-wishlist .wishlist-tag:hover {
    background-color: var(--happy-secondary);
    box-shadow: var(--shadow-3);
  }

  @media screen and (min-width: 992px) {
    .events-hero {
      grid-template-columns: 5fr 4fr;
      align-items: center;
    }
  }
`;

export default Wrapper;
