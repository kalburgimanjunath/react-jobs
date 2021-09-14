import React from 'react';
export default function Search() {
  return (
    <section className="search-sec">
      <div className="container">
        <form action="#" method="post" novalidate="novalidate">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    type="text"
                    className="form-control search-slt"
                    placeholder="Enter Pickup City"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    type="text"
                    className="form-control search-slt"
                    placeholder="Enter Drop City"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <select
                    className="form-control search-slt"
                    id="exampleFormControlSelect1"
                  >
                    <option>Select Vehicle</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button type="button" className="btn btn-danger wrn-btn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
