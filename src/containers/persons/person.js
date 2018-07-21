import React from 'react';
import { connect } from 'react-redux';
import { sendPerson, getPersons } from '../../actions/index';
import PersonList from './personList';
import SortPerson from './sortPerson';
import { Root, Wrapper, Container, Section } from './person.styled';
// import persons from '../../person.json';

class Person extends React.Component {
     listItems = [];

     componentDidMount() {
          this.props.getPerson();
     }

     shouldComponentUpdate() {
          this.listItems = this.props.persons;
          this.forceUpdate();
          return false;
     }

     createPerson = event => {
          event.preventDefault();
          /* persons.map((item, key) => {
               this.props.sendData(item);
          }); */
     };

     shortName = () => {
          console.log();
     };

     render() {
          console.log(this.listItems);
          const persons = this.props.persons;
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
                                        ? this.listItems.map(
                                               (item, key) => {
                                                    return (
                                                         <PersonList
                                                              person={
                                                                   item
                                                              }
                                                              key={key}
                                                              count={key}
                                                         />
                                                    );
                                               }
                                          )
                                        : null}
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
