import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="container">
      <h1 className="">Products List</h1>
      <button className="btn btn-success">Create New</button>
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
          {}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
