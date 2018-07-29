import React from "react";
import {
   FilterRoot,
   FilterContainer,
   P4,
   Title,
   FilterBlock,
   Content,
   Label,
   P3
} from "./person.styled";

class Filter extends React.Component {
   render() {
      return (
         <FilterRoot>
            <FilterContainer>
               <Title>
                  <P4>Filter</P4>
               </Title>
               <FilterBlock>
                  <Title>
                     <P4>Gender</P4>
                  </Title>
                  <Content>
                     <Label>
                        <input
                           type="radio"
                           name="gender"
                           value="Female"
                           onChange={e => this.props.SelectGender(e)}
                        />
                        <P3>Female</P3>
                     </Label>
                     <Label>
                        <input
                           type="radio"
                           name="gender"
                           value="Male"
                           onChange={e => this.props.SelectGender(e)}
                        />
                        <P3>Male</P3>
                     </Label>
                     <Label>
                        <input
                           type="radio"
                           name="gender"
                           value="all"
                           onChange={e => this.props.SelectGender(e)}
                        />
                        <P3>All</P3>
                     </Label>
                  </Content>
               </FilterBlock>
            </FilterContainer>
         </FilterRoot>
      );
   }
}

export default Filter;
