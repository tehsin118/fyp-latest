/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import Tabletop from "../../EntryFile/tabletop";
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  search_whites,
  EditIcon,
  DeleteIcon,
} from "../../EntryFile/imagePath";
import EditStore from "./EditStore";
import AddStore from "./AddStore";

const StoreList = () => {
  const [inputfilter, setInputfilter] = useState(false);
  const [editStoreModal, setEditStoreModal] = useState(false);
  const [addStoreModal, setAddStoreModal] = useState(false);

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
  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const options = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];
  const [data] = useState([
    {
      id: 1,
      storeName: "Thomas",
      phone: "+12163547758",
      email: "thomas@example.com",
      status: true,
    },
    {
      id: 2,
      storeName: "Benjamin",
      phone: "123-456-776",
      email: "benjamin@example.com",
      status: false,
    },
    {
      id: 3,
      storeName: "James",
      phone: "+123-890-876",
      email: "james@example.com",
      status: false,
    },
    {
      id: 4,
      storeName: "Bruklin",
      phone: "+123-876-876",
      email: "bruklin@example.com",
      status: true,
    },
    {
      id: 5,
      storeName: "Franklin",
      phone: "+0987652112",
      email: "beverly@example.com",
      status: true,
    },
  ]);

  const columns = [
    {
      title: "Store Name",
      dataIndex: "storeName",
      sorter: (a, b) => a.storeName.length - b.storeName.length,
    },

    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (e, record) => (
        <div className="status-toggle d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            // id="user18"
            id={e}
            className="check"
            defaultChecked={e}
          />
          {/* <label htmlFor="user18" className="checktoggle"> */}
          <label htmlFor={e} className="checktoggle">
            checkbox
          </label>
        </div>
      ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <a className="me-3" onClick={handleStoreModal}>
            <img src={EditIcon} alt="img" />
          </a>
          <Link className="confirm-text" to="#" onClick={confirmText}>
            <img src={DeleteIcon} alt="img" />
          </Link>
        </>
      ),
    },
  ];

  const handleStoreModal = () => setEditStoreModal(!editStoreModal);
  const handleAddStoreModal = () => setAddStoreModal(!addStoreModal);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Store List</h4>
              <h6>Manage your Store</h6>
            </div>
            <div className="page-btn">
              <a className="btn btn-added" onClick={handleAddStoreModal}>
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Store
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

      <Modal show={editStoreModal} onHide={handleStoreModal} size="xl">
        <Modal.Body>
          <EditStore customSpace="m-0 p-0" />
        </Modal.Body>
      </Modal>

      <Modal show={addStoreModal} onHide={handleAddStoreModal} size="xl">
        <Modal.Body>
          <AddStore customSpace="m-0 p-0" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StoreList;
