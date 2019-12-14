import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeImg = styled.img`
  width: 45%;
  padding: 10px;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <WelcomeImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className="main-buttons" to={"/characters"}>
          See Characters
        </Link>
      </header>
    </section>
  );
}
