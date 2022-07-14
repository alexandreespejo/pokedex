import styled from "styled-components";

interface FilterOptionProps {
  isSelected : boolean;
}

export const Container = styled.div`
  grid-area: 2 / 1 / 6 / 2;

  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  margin-top: 20px;

  .favoriteContainer {
    margin-top: 20px;
  }
`

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: ${({theme})=>theme.red};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const FilterConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: auto;
  width: 100%;
`

export const FilterOption = styled.button<FilterOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isSelected }) => isSelected ? theme.red : theme.white};
  color: ${({ theme, isSelected }) => isSelected ? theme.white : theme.red};

  border: 1px solid ${({ theme }) => theme.red};

  text-transform: capitalize;
  
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 20px;
  padding: 10px;

  cursor: pointer;
`