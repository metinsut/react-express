import React from "react";
import { connect } from "react-redux";
import { sendPerson, getPersons } from "../../actions/index";
import PersonList from "./personList";
import SortPerson from "./sortPerson";
import { Root, Wrapper, Container, Section, Input } from "./person.styled";
import Pagination from "./pagination";
// import persons from "../../person.json";

class Person extends React.Component {
   listItems = [];
   pagItems = [];
   perPage = 10;
   pageCount = 0;
   selected = 0;

   componentDidMount() {
      this.props.getPerson();
   }

   //  shouldComponentUpdate(nextProps, nextState) {
   // this.listItems = this.props.persons;
   // this.forceUpdate();
   // return true;
   //  }

   componentDidUpdate() {
      if (this.listItems.length < 1) {
         this.listItems = this.props.persons;
         this.pageCount = Math.ceil(this.listItems.length / this.perPage);
         this.pagItems = this.listItems.slice(0, this.perPage);
         this.forceUpdate();
      }
   }

   /*    createPerson = event => {
      event.preventDefault();
      persons.map((item, key) => {
         this.props.sendData(item);
      });
   }; */

   shortName = async type => {
      await this.listItems.sort(function(a, b) {
         var nameA = a.name.toUpperCase();
         var nameB = b.name.toUpperCase();
         if (type === "asc") {
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         }
         if (type === "desc") {
            if (nameA < nameB) {
               return 1;
            }
            if (nameA > nameB) {
               return -1;
            }
            return 0;
         }
      });
      this.pagItems = this.listItems.slice(
         this.selected,
         parseInt(this.selected) + parseInt(this.perPage)
      );
      this.forceUpdate();
   };

   handlePageClick = data => {
      this.selected = data.selected * this.perPage;
      this.pagItems = this.listItems.slice(
         this.selected,
         parseInt(this.selected) + parseInt(this.perPage)
      );
      this.forceUpdate();
   };

   perPageCount = e => {
      this.perPage = e.target.value;
      this.pageCount = Math.ceil(this.listItems.length / this.perPage);
      this.pagItems = this.listItems.slice(
         this.selected,
         parseInt(this.selected) + parseInt(this.perPage)
      );
      this.forceUpdate();
   };

   render() {
      return (
         <Section>
            {/* <form onSubmit={this.createPerson}>
               <Input
                  type="submit"
                  value="Submit"
               />
            </form> */}
            <Root>
               <Wrapper>
                  <Container>
                     <SortPerson
                        perPageCount={this.perPageCount}
                        perPage={this.perPage}
                        shortName={this.shortName}
                     />
                     {this.pagItems
                        ? this.pagItems.map((item, key) => {
                             return <PersonList person={item} key={key} />;
                          })
                        : null}
                     <Pagination
                        pageCount={this.pageCount}
                        handlePageClick={this.handlePageClick}
                     />
                  </Container>
               </Wrapper>
            </Root>
         </Section>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   persons: state.getPersons ? state.getPersons : null
});

const mapDispatchToProps = dispatch => {
   return {
      sendData: data => {
         dispatch(sendPerson(data));
      },
      getPerson: () => {
         dispatch(getPersons());
      }
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Person);
