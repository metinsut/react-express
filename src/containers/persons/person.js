import React from "react";
import { connect } from "react-redux";
import { sendPerson, getPersons } from "../../actions/index";
import PersonList from "./personList";
import SortPerson from "./sortPerson";
import { Root, Wrapper, Container, Section } from "./person.styled";
import Pagination from "./pagination";
// import persons from '../../person.json';

class Person extends React.Component {
   listItems = [];
   perPage = 10;
   pageCount = 50;
   offset = 0;
   limit = this.perPage;
   total_count = 500;

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
         this.pageCount = Math.ceil(this.total_count / this.limit);
         this.forceUpdate();
      }
   }

   createPerson = event => {
      event.preventDefault();
      /* persons.map((item, key) => {
               this.props.sendData(item);
          }); */
   };

   shortName = async type => {
      await this.listItems.sort(function(a, b) {
         var nameA = a.first_name.toUpperCase();
         var nameB = b.first_name.toUpperCase();
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
      this.forceUpdate();
   };

   handlePageClick = () => {};

   render() {
      return (
         <Section>
            {/* <form onSubmit={this.createPerson}>
                         <input
                              style={{ padding: '10px 20px' }}
                              type="submit"
                              value="Submit"
                         />
                    </form> */}
            <Root>
               <Wrapper>
                  <Container>
                     <SortPerson shortName={this.shortName} />
                     {this.listItems
                        ? this.listItems.map((item, key) => {
                             return (
                                <PersonList
                                   person={item}
                                   key={key}
                                   count={key}
                                />
                             );
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
