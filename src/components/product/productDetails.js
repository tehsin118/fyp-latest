/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { barcode1, Printer, Product69 } from "../../EntryFile/imagePath";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import PropTypes from "prop-types";

const ProductDetails = (props) => {
  return (
    <div className={`page-wrapper ${props.customSpace}`}>
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Details</h4>
            <h6>Full details of a product</h6>
          </div>
        </div>
        {/* /add */}
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="bar-code-view">
                  <img src={barcode1} alt="barcode" />
                  <a className="printimg">
                    <img src={Printer} alt="print" />
                  </a>
                </div>
                <div className="productdetails">
                  <ul className="product-bar">
                    <li>
                      <h4>Product</h4>
                      <h6>Macbook pro </h6>
                    </li>
                    <li>
                      <h4>Category</h4>
                      <h6>Computers</h6>
                    </li>

                    <li>
                      <h4>Quantity</h4>
                      <h6>50</h6>
                    </li>

                    <li>
                      <h4>Price</h4>
                      <h6>1500.00</h6>
                    </li>

                    <li>
                      <h4>Description</h4>
                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="slider-product-details">
                  {/* <OwlCarousel className="owl-theme" items={1} dots={false} nav> */}
                  <div className="slider-product item">
                    <img src={Product69} alt="img" />
                    <h4>macbookpro.jpg</h4>
                    <h6>581kb</h6>
                  </div>
                  <div className="slider-product item">
                    <img src={Product69} alt="img" />
                    <h4>macbookpro.jpg</h4>
                    <h6>581kb</h6>
                  </div>
                  {/* </OwlCarousel> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /add */}
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  customSpace: PropTypes.string.isRequired, // Assuming customSpace is a string
};
export default ProductDetails;
