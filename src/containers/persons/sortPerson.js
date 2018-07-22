import React from "react";
import styled from "styled-components";

let SortHead = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

let SortItem = styled.p`
   padding: 10px;
   cursor: pointer;
   color: #4a4a4a;
`;

let Select = styled.select`
   padding: 10px 20px;
`;

class SortPerson extends React.Component {
   type = "asc";

   shortNameType = () => {
      this.props.shortName(this.type);
      this.type === "asc" ? (this.type = "desc") : (this.type = "asc");
      this.forceUpdate();
   };

   render() {
      return (
         <SortHead>
            <SortItem onClick={this.shortNameType}>Name</SortItem>
            <SortItem>Birthday</SortItem>
            <SortItem>Salary</SortItem>
            <SortItem>Sell</SortItem>
            <SortItem>Year</SortItem>
            <Select
               value={this.props.perPage}
               onChange={(e) =>this.props.perPageCount(e)}
            >
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="50">50</option>
            </Select>
         </SortHead>
      );
   }
}

export default SortPerson;
