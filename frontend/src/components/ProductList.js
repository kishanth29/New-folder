import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editProduct, SetEditProduct] = useState(null);

  // create product modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    weight: "",
    price: "",
  });

  // for fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);

  // for page changing
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //  product delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };
  // for showable
  const handleShow = (product) => {
    setSelectedProduct(product);
  };
  //  for handle to edit

  const handleEdit = (product) => {
    setEditMode(true);
    SetEditProduct({ ...product });
  };

  // handle input chnage for create
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  //  handle create product
  const handleCreateProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/products/create",
        newProduct
      );
      setProducts([...products, response.data]);
      setShowCreateModal(false);
      setNewProduct({
        name: "",
        weight: "",
        price: "",
      });
    } catch (error) {
      console.log("Error creating product", error);
    }
  };

  //  after change/update save
  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/products/update/${editProduct._id}`,
        editProduct
      );
      setProducts(
        products.map((product) =>
          product._id === editProduct._id ? editProduct : product
        )
      );
      setEditMode(false);
      SetEditProduct(null);
    } catch (error) {
      console.log("Error updating product", error);
    }
  };

  // for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetEditProduct({ ...editProduct, [name]: value });
  };
  //  for paging
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexofFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(products.length / itemsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <div className="d-flex justify-content-between align-items-center vh-100">
      <div className="container">
        {/* first componenet */}
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h1 className="mb-8">Products List</h1>
          <button
            className="btn btn-success"
            onClick={() => setShowCreateModal(true)}
          >
            Create New
          </button>
        </div>
        {/* second componenet */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Created At</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product._id} className="">
                <td>
                  {format(new Date(product.createdAt), "yyyy-MM-dd HH:mm:ss")}
                </td>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
                <td className="">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-info text-white me-2"
                    onClick={() => handleShow(product)}
                  >
                    Show
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* third componenet */}
        <ul className="pagination">
          {/* previous Button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ``}`}>
            <button
              className="page-link "
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <b>&laquo; Previous</b>
            </button>
          </li>
          {/* next button */}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <button
              className="page-link text-primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageNumbers.length}
            >
              Next &raquo;
            </button>
          </li>
        </ul>
        {/* Create product */}
        {showCreateModal && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-content">
              <h2>Create Product</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleNewProductChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  Weight:
                </label>
                <input
                  type="text"
                  name="weight"
                  value={newProduct.weight}
                  onChange={handleNewProductChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleNewProductChange}
                  className="form-control"
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handleCreateProduct}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        {/* selected product */}
        {selectedProduct && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-content">
              <h2>Product details</h2>
              <p>
                <strong>Name:</strong>
                {selectedProduct.name}
              </p>
              <p>
                <strong>Weight:</strong>
                {selectedProduct.weight}
              </p>
              <p>
                <strong>Price:</strong>
                {selectedProduct.price}
              </p>
              <p>
                <strong>Created At:</strong>
                {format(
                  new Date(selectedProduct.createdAt),
                  "yyyy-mm-dd HH:mm:ss"
                )}
              </p>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <button
                  className="btn btn-secondary  "
                  onClick={() => setSelectedProduct(null)}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Edit product form */}
        {editMode && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-content">
              <h2>Edit Product</h2>
              <div className=" mb-3">
                <label
                  htmlFor="name"
                  className="form-label d-inline-block me-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={editProduct.name}
                  onChange={handleInputChange}
                  style={{ borderColor: "blue" }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="weight"
                  className="form-label d-inline-block me-2"
                >
                  Weight:
                </label>
                <input
                  type="text"
                  name="weight"
                  value={editProduct.weight}
                  onChange={handleInputChange}
                  style={{ borderColor: "blue" }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="price"
                  className="form-label d-inline-block me-2"
                >
                  Price:
                </label>
                <input
                  type="text"
                  name="price"
                  value={editProduct.price}
                  onChange={handleInputChange}
                  style={{ borderColor: "blue" }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-sm btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
