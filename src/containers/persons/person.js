import React from 'react';
import { connect } from 'react-redux';
import { sendPerson, getPersons, sortPersonReducer } from '../../actions/index';
import PersonList from './personList';
import SortPerson from './sortPerson';
import { Root, Wrapper, Container, Section } from './person.styled';
// import persons from '../../person.json';

class Person extends React.Component {
     componentDidMount() {
          this.props.getPerson();
     }

     createPerson = event => {
          event.preventDefault();
          /* persons.map((item, key) => {
               this.props.sendData(item);
          }); */
     };

     shortList = () => {
          this.props.sortPerson();
          this.forceUpdate();
     };

     render() {
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
                                   <SortPerson shortList={this.shortList} />
                                   {persons
                                        ? Object.keys(persons).map(
                                               (item, key) => {
                                                    return (
                                                         <PersonList
                                                              person={
                                                                   persons[item]
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
          },
          sortPerson: () => {
               dispatch(sortPersonReducer());
          }
     };
};

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(Person);
