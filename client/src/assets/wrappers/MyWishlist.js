import styled from "styled-components";

const Wrapper = styled.div`
  .wishlist-title {
    text-align: center;
  }
  .wishlist-container {
    display: grid;
    gap: 2rem 4rem;
    padding-bottom: 3rem;
  }

  .wishlist-form {
    width: 100%;
    margin: 0;
  }

  .wishlist-img {
    border-radius: var(--borderRadius);
  }

  @media screen and (min-width: 992px) {
    .wishlist-container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 400px;
      align-items: center;
    }
  }

  .wish-container {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;
    /* border: 2px solid green; */
  }

  .wish-img {
    /* height: 15rem; */
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
  }

  .wish h5 {
    margin-bottom: 1rem;
    line-height: 1;
    color: var(--grey-700);
  }

  .btn-wish {
    background: #8bd3dd;
  }

  @media screen and (min-width: 576px) {
    .wish-container {
      grid-template-columns: 1fr 1fr;
    }
    .wish-img {
      width: 12rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .wish-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .wish h5 {
      font-size: 1.15rem;
    }
  }
`;

export default Wrapper;
