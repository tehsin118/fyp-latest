/* eslint-disable no-unused-vars */
import React from "react";
import { Samsung, Upload } from "../../EntryFile/imagePath";
import PropTypes from "prop-types";

const EditCategory = (props) => {
  return (
    <>
      <div className={`page-wrapper ${props.customSpace}`}>
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product Edit Category</h4>
              <h6>Edit a product Category</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" defaultValue="Computers" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      defaultValue={"Computers Description"}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <button className="btn btn-submit me-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
          {/* /add */}
        </div>
      </div>
    </>
  );
};

EditCategory.propTypes = {
  customSpace: PropTypes.string.isRequired, // Assuming customSpace is a string
};

export default EditCategory;
