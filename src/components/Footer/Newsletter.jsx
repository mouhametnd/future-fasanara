import React from 'react';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Wrapper>
      <h3>Join Our Newsletter</h3>

      <div className="container-inputs">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Name" />
      </div>

      <button type="submit" className="app__button--base app__button--hover ">
        Subscribe
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-flow: column;
  gap: 20px;
  width: 100%;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray);
    color: var(--white);
  }

  .container-inputs {
    display: grid;
    gap: 10px;
  }
  input {
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 5px;
    max-width: 300px;
    padding: 10px;
    font-size: 1rem;
    color: var(--black);

    &::placeholder {
      color: var(--black);
    }
  }

  @media screen and (min-width: 548px) {
    & .container-inputs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    & button {
      margin-top: 20px;
      display: inline-block;
    }

    & h3{
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    display: block;
    max-width: 1100px;

    & .container-inputs {
      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      margin-right: 20px;
    }
  }
`;

export default Newsletter;
