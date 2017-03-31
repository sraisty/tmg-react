import React from 'react';

const SearchForm = () => {
  return (
    <form role="search" action="search.html" className="navbar-form">
      <div className="form-group has-feedback">
        <input type="text" placeholder="Search for..." className="form-control" />
        <div data-search-dismiss="" className="fa fa-times form-control-feedback">
          Search
        </div>
      </div>
      <button type="submit" className="hidden btn btn-default">Submit</button>
    </form>
  );
};

export default SearchForm;
