import styled from "styled-components";

const Wrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    /*  background: blue; */
  }
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    /* background: red; */
  }

  .nav-header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header img {
    width: 200px;
  }

  .nav-btn i {
    font-size: 1.25rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .show-links {
    height: 310px;
  }

  .nav-link {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--grey-900);
    letter-spacing: var(--letterSpacing);
    padding: 1rem 0;
    border-top: 1px solid var(--grey-500);
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--happy-button);
  }

  /*   .user-link button {
    padding: 0.15rem 1rem;
  } */

  @media screen and (min-width: 992px) {
    .nav-btn {
      display: none;
    }
    .navbar {
      height: 6rem;
    }
    .nav-center {
      display: flex;
      align-items: center;
    }
    .nav-header {
      height: auto;
      margin-right: 2rem;
    }

    .nav-links {
      height: auto;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    .nav-link {
      padding: 0;
      border-top: none;
      margin-right: 1rem;
      font-size: 1rem;
    }

    .user-link {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

export default Wrapper;
