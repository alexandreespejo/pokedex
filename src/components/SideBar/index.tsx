
import React, { useState } from "react";
import { Container, FilterConatiner, FilterOption, CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./style";
import TypesList from '../../constants/types'

interface SideBarProps {
  selectedType:string,
  setSelectedType:Function,
  toggle:Function,
  toggleState:boolean,
}

export default function SideBar ( {selectedType, setSelectedType, toggle, toggleState} : SideBarProps) {
  const formatedList = TypesList.sort((a, b) => a.localeCompare(b))

  const handleClick = (key:string) => {
    if(key===selectedType) return setSelectedType('');
    setSelectedType(key)
  }

  const FilterOptions = () => {
    return (
      <div>
        Filtrar por tipo :
        <FilterConatiner>
          {
            formatedList.map(option=>(
              <FilterOption key={option} onClick={()=>handleClick(option)} isSelected={selectedType === option}>{option}</FilterOption>
            ))
          }
        </FilterConatiner>
      </div>
    )
  }
  
  return (
    <Container>
      <FilterOptions />
      <div className="favoriteContainer">
        Filtrar favoritos:
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" checked={toggleState} onChange={()=>toggle()}/>
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </div>
    </Container>
  )
}