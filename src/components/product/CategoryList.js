/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import Tabletop from "../../EntryFile/tabletop";
import ReactDOM from "react-dom"; // Add this line

import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  MacbookIcon,
  OrangeImage,
  PineappleImage,
  StawberryImage,
  AvocatImage,
  EyeIcon,
  EditIcon,
  DeleteIcon,
  search_whites,
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";
import AddCategory from "./AddCategory";
import { Modal } from "react-bootstrap";
import EditCategory from "./EditCategory";

const confirmText = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    type: "warning",
    showCancelButton: !0,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    confirmButtonClass: "btn btn-primary",
    cancelButtonClass: "btn btn-danger ml-1",
    buttonsStyling: !1,
  }).then(function (t) {
    t.value &&
      Swal.fire({
        type: "success",
        title: "Deleted!",
        text: "Your file has been deleted.",
        confirmButtonClass: "btn btn-success",
      });
  });
};

const CategoryList = () => {
  const [inputfilter, setInputfilter] = useState(false);

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const [data] = useState([
    {
      id: 1,
      categoryName: "Macbook pro",
      description: "Computer Description",
    },
    {
      id: 2,
      categoryName: "Orange",
      description: "Category Description",
    },
    {
      id: 3,
      categoryName: "Pinapple",
      description: "Category Description",
    },
    {
      id: 4,
      categoryName: "Strawberry",
      description: "Category Description",
    },
    {
      id: 5,
      categoryName: "Avocat",
      description: "Computer Description",
    },
    {
      id: 6,
      categoryName: "Macbook pro",
      description: "Computer Description",
    },
  ]);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" style={{ fontSize: "15px", marginLeft: "10px" }}>
            {record.categoryName}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
    },

    {
      title: " Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },

    {
      title: "Action",
      render: () => (
        <>
          <>
            <a className="me-3" onClick={handleEditCategoryModal}>
              <img src={EditIcon} alt="img" />
            </a>
            <Link className="confirm-text" to="#" onClick={confirmText}>
              <img src={DeleteIcon} alt="img" />
            </Link>
          </>
        </>
      ),
    },
  ];

  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);

  const handleCategoryModal = () => setAddCategoryModal(!addCategoryModal);
  const handleEditCategoryModal = () =>
    setEditCategoryModal(!editCategoryModal);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product Category List </h4>
              <h6>View/Search product Category</h6>
            </div>
            <div className="page-btn" onClick={handleCategoryModal}>
              <a
                // to="/dream-pos/product/addcategory-product"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Category
              </a>
            </div>
          </div>

          {/* /product list */}
          <div className="card">
            <div className="card-body">
              <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />

              <div className="table-responsive">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <Modal show={addCategoryModal} onHide={handleCategoryModal} size="xl">
        <Modal.Body>
          <AddCategory customSpace="m-0 p-0" />
        </Modal.Body>
      </Modal>
      <Modal
        show={editCategoryModal}
        onHide={handleEditCategoryModal}
        size="xl"
      >
        <Modal.Body>
          <EditCategory customSpace="m-0 p-0" />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CategoryList;
