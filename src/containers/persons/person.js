import React from "react";
import { connect } from "react-redux";
import { sendPerson, getPersons, clearGetUser } from "../../actions/index";
import PersonList from "./personList";
import SortPerson from "./sortPerson";
import {
  Root,
  Wrapper,
  Container,
  Section,
  ListRoot,
  FilterRoot,
  FilterContainer
} from "./person.styled";
import Filter from "./filter.js";
import Pagination from "./pagination";
// import persons from "../../person.json";

class Person extends React.Component {
  listItems = [];
  pagItems = [];
  filterItems = [];
  perPage = 10;
  pageCount = 0;
  selected = 0;
  gender = null;
  sellValues = { min: 0, max: 1 };
  filterSellValues = { min: 0, max: 1 };

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
      this.filterItems = this.listItems;
      this.pageCount = Math.ceil(this.filterItems.length / this.perPage);
      this.pagItems = this.filterItems.slice(0, this.perPage);
      this.calculateSells();
      this.forceUpdate();
    }

  }

  /*    createPerson = event => {
     event.preventDefault();
     persons.map((item, key) => {
        this.props.sendData(item);
     });
  }; */

  calculateSells = () => {
    this.sells = this.filterItems.map(item => {
      return parseInt(item.sell);
    });
    this.sellValues.min = Math.min(...this.sells);
    this.sellValues.max = Math.max(...this.sells);
    this.filterSellValues = this.sellValues;
    this.forceUpdate();
  }

  shortName = async type => {
    await this.filterItems.sort((a, b) => {
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
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  shortBirthday = async type => {
    await this.filterItems.sort((a, b) => {
      if (type === "asc") {
        return new Date(a.birthday.$date) - new Date(b.birthday.$date);
      }
      if (type === "desc") {
        return new Date(b.birthday.$date) - new Date(a.birthday.$date);
      }
    });
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  shortSalary = async type => {
    await this.filterItems.sort((a, b) => {
      if (type === "asc") {
        return a.salary - b.salary;
      }
      if (type === "desc") {
        return b.salary - a.salary;
      }
    });
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  shortSell = async type => {
    await this.filterItems.sort((a, b) => {
      if (type === "asc") {
        return a.sell - b.sell;
      }
      if (type === "desc") {
        return b.sell - a.sell;
      }
    });
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  shortYear = async type => {
    await this.filterItems.sort((a, b) => {
      if (type === "asc") {
        return a.year - b.year;
      }
      if (type === "desc") {
        return b.year - a.year;
      }
    });
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  handlePageClick = data => {
    this.selected = data.selected * this.perPage;
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  perPageCount = e => {
    this.perPage = e.target.value;
    this.pageCount = Math.ceil(this.filterItems.length / this.perPage);
    this.pagItems = this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  SelectGender = e => {
    this.gender = e.target.value;
    this.forceUpdate();
    this.FilterGender(this.gender);
  };

  FilterGender = async gender => {
    if (gender === "all") {
      this.filterItems = await this.listItems;
    } else {
      this.filterItems = await this.listItems.filter(
        item => item.gender === gender
      );
    }
    this.filterItems = await this.filterItems.filter(
      item => ((item.sell <= this.filterSellValues.max) && (item.sell >= this.filterSellValues.min))
    );
    this.pageCount = await Math.ceil(this.filterItems.length / this.perPage);
    this.pagItems = await this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  };

  FilterSell = async values => {
    this.filterSellValues = {
      min: values.min,
      max: values.max
    };
    this.filterItems = await this.filterItems.filter(
      item => ((item.sell <= this.filterSellValues.max) && (item.sell >= this.filterSellValues.min))
    );
    this.pageCount = await Math.ceil(this.filterItems.length / this.perPage);
    this.pagItems = await this.filterItems.slice(
      this.selected,
      parseInt(this.selected) + parseInt(this.perPage)
    );
    this.forceUpdate();
  }

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
                shortBirthday={this.shortBirthday}
                shortSalary={this.shortSalary}
                shortSell={this.shortSell}
                shortYear={this.shortYear}
              />
              <Filter
                SelectGender={this.SelectGender}
                FilterSell={this.FilterSell}
                sellValues={this.sellValues}
                filterSellValues={this.filterSellValues}
              />
              <ListRoot>
                {this.pagItems
                  ? this.pagItems.map((item, key) => {
                    return <PersonList person={item} key={key} />;
                  })
                  : null}
              </ListRoot>
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
