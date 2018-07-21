import React from 'react';
import styled from 'styled-components';

let SortHead = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

let SortItem = styled.p`
     padding: 10px;
     cursor: pointer;
     color: #4a4a4a;
`;

class SortPerson extends React.Component {
   type="asc";
   
   shortNameType = () => {
      this.props.shortName(this.type);
      this.type==="asc"? this.type="desc":this.type="asc";
      this.forceUpdate();
   }
     render() {
          return (
               <SortHead>
                    <SortItem onClick={this.shortNameType}>First Name</SortItem>
                    <SortItem>Last Name</SortItem>
                    <SortItem>City</SortItem>
                    <SortItem>Counrty</SortItem>
                    <SortItem>Departman</SortItem>
                    <SortItem>Job Title</SortItem>
                    <SortItem>Salary</SortItem>
                    <SortItem>Sell</SortItem>
                    <SortItem>Date4</SortItem>
                    <SortItem>Language</SortItem>
                    <SortItem>Year</SortItem>
                    <SortItem>Web</SortItem>
               </SortHead>
          );
     }
}

export default SortPerson;
