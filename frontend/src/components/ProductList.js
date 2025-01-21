import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h1 className="mb-8">Products List</h1>
          <button className="btn btn-success">Create New</button>
        </div>
        <table className="table">
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
                  <button className="btn btn-success me-2">Edit</button>
                  <button className="btn btn-primary me-2">Show</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="pagination">
          {/* previous Button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ``}`}>
            <button
              className="page-link "
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage}
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
      </div>
    </div>
  );
};

export default ProductList;
