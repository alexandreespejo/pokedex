
import React from "react";
import { Container, Content } from "./style";
import { ReactComponent as Logo } from '../../assets/synvia.svg';
import { ReactComponent as PokeBall } from '../../assets/pokeball.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
  return (
    <Container>
      <Content>
        <div className="divider">
          <PokeBall />
          <h2>
            Pokédex
          </h2>
        </div>
        <div className="divider">
          <Logo />
          <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        </div>
      </Content>
    </Container>
  )
}