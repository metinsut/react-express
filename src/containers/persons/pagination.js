import React from "react";
import ReactPaginate from "react-paginate";

class Pagination extends React.Component {
   render() {
      return (
         <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.props.handlePageClick}
            containerClassName={"pagBlock"}
            subContainerClassName={"pagItem"}
            activeClassName={"activeClassName"}
            pageClassName={"pageClassName"}
            pageLinkClassName={"pageLinkClassName"}
            previousClassName={"previousClassName"}
            nextClassName={"nextClassName"}
         />
      );
   }
}

export default Pagination;
