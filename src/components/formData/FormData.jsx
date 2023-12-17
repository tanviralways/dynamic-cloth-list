import React, { useState } from "react";
import "./formData.css";
import ClothTable from "../clothTable/ClothTable";

function FormData() {
  const [clothData, setclothData] = useState({
    name: "",
    id: "",
    price: "",
    quantity: "",
    color: "",
    description: "",
  });
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  const { name, id, price, quantity, color, description } = clothData;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setclothData({ ...clothData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submited");
    setAllProducts([...allProducts, clothData]);
  };

  const deleteCloth = (id) => {
    const rest = allProducts.filter((products) => {
      return products.id !== id;
    });
    console.log(rest);
    setAllProducts(rest);
  };

  return (
    <div>
      <div className="login-box">
        <h2 className="text-xl">Cloths List App</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              required
            />
            <label>Cloth Name</label>
          </div>
          <div className="user-box">
            <input
              onChange={handleChange}
              value={id}
              type="number"
              name="id"
              required
            />
            <label>Cloth Id</label>
          </div>
          <div className="user-box">
            <input
              onChange={handleChange}
              value={price}
              type="number"
              name="price"
              required
            />
            <label>Cloth Price</label>
          </div>
          <div className="user-box">
            <input
              onChange={handleChange}
              type="number"
              name="quantity"
              value={quantity}
              required
            />
            <label>Cloth Quantity</label>
          </div>
          <div className="user-box">
            <label htmlFor="color">Choose a color :</label>
            <select
              onChange={handleChange}
              id="color"
              name="color"
              value={color}
              form="colorform">
              <option value="volvo">None</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
            </select>
            {/* <p>Please select size:</p>  */}
            {/* <div classNameName="radio-div">
              <input type="radio" id="l" name="fav_language" value="" /> 
              <label classNameName="radio" for="l">
                M
              </label>
              <br />
                <input type="radio" id="m" name="fav_language" value="" /> 
              <label classNameName="radio" for="m">
                L
              </label>
              <br />
                <input type="radio" id="n" name="fav_language" value="" /> 
              <label classNameName="radio" for="n">
                Xl
              </label>
            </div> */}
            <label className="mb-10" id="description">
              Description
            </label>
            <textarea
              className="mt-10 pt-4 px-2"
              onChange={handleChange}
              name="description"
              id=""
              value={description}
              cols="54"
              rows="4"></textarea>
            {/* <input type="radio" id="terms" name="fav_language" value="" /> 
            <label classNameName="radio" for="terms">
              accept terms and conditions.
            </label> */}
          </div>

          <button className="btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add
          </button>
        </form>
      </div>

      {allProducts.length ? (
        <div className="view-container ml-6 mt-6">
          <>
            <div className="table-responsive">
              <table className="table border text-white border-cyan-600 p-12">
                <thead className="border border-cyan-300 p-10">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PRICE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      QUANTITY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      COLOR
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DESCRIPTION
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DELET
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((product) => (
                   <Product deleteProduct={deleteProduct} product={product} />
                 ))} */}
                  {allProducts.map((products) => (
                    <ClothTable products={products} deleteCloth={deleteCloth} />
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => {
                setAllProducts([]);
              }}
              type="button"
              className="text-white border border-red-600 mt-1  hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-2/5">
              Remove All
            </button>
          </>
        </div>
      ) : (
        <h1 className="text-4xl text-white pt-72 pl-72">
          No product added yet
        </h1>
      )}
    </div>
  );
}

export default FormData;
