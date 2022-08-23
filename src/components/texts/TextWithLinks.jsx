import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TextsWithLink = (props) => {
  const handleClick = (e, funct) => {
    funct(e);
  };

  return (
    <TextContainer>
      {props.text.map((element) => {
        return (
          <p key={element.text}>
            {" "}
            {element.text}{" "}
            <Link to={element.link.to} style={{ textDecoration: "none" }}>
              <span>{element.link.text}</span>
            </Link>
          </p>
        );
      })}
    </TextContainer>
  );
};

export default TextsWithLink;

const TextContainer = styled.div`
  display: inline;
  flex-flow: row wrap;
  font-size: clamp(14px, 1.8vw, 18px);
  p {
    display: inline;
    color: #4e5152;
  }
  span {
    color: var(--SecondaryBlue);
  }
`;
