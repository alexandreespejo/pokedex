import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme})=>theme.red};
  color: ${({theme})=>theme.white};

  height: 6.5rem;
  width: 100%;

  box-shadow: 0px 2px 13px -7px #000000, 0px 2px 7px 0px rgba(0,0,0,0.4);

  .divider{
    display: flex;
    align-items: center;
    justify-content: center;
    h2, .fa-arrow-right-from-bracket{
      margin-left: 20px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 70%;
`