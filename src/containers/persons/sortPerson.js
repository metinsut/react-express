import React from "react";
import styled from "styled-components";

let SortHead = styled.article`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
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

   shortBirthdayType = () => {
      this.props.shortBirthday(this.type);
      this.type === "asc" ? (this.type = "desc") : (this.type = "asc");
      this.forceUpdate();
   };
   shortSalaryType = () => {
      this.props.shortSalary(this.type);
      this.type === "asc" ? (this.type = "desc") : (this.type = "asc");
      this.forceUpdate();
   };
   shortSellType = () => {
      this.props.shortSell(this.type);
      this.type === "asc" ? (this.type = "desc") : (this.type = "asc");
      this.forceUpdate();
   };
   shortYearType = () => {
      this.props.shortYear(this.type);
      this.type === "asc" ? (this.type = "desc") : (this.type = "asc");
      this.forceUpdate();
   };

   render() {
      return (
         <SortHead>
            <SortItem onClick={this.shortNameType}>Name</SortItem>
            <SortItem onClick={this.shortBirthdayType}>Birthday</SortItem>
            <SortItem onClick={this.shortSalaryType}>Salary</SortItem>
            <SortItem onClick={this.shortSellType}>Sell</SortItem>
            <SortItem onClick={this.shortYearType}>Year</SortItem>
            <Select
               value={this.props.perPage}
               onChange={e => this.props.perPageCount(e)}
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
