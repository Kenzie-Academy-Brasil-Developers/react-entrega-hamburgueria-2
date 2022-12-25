import React, { useEffect, useState } from "react";
import { StyleCartDiv, StyleCartSection, StyleContainer } from "./style";
/* import { toast, ToastContainer } from "react-toastify"; */
/* import "react-toastify/dist/ReactToastify.css"; */
import { api } from "../services";

interface iItens {
  item: Object;
  name: "string";
  img: "string";
  category: "string";
  price: number;
}

export const Cards = (/* { filterName } */) => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  /* const alert = () => toast.error("O item já existe"); */

  useEffect(() => {
    async function productsList() {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("/products", {
          headers: { authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    productsList();
  }, []);

  return (
    <StyleContainer>
      <StyleCartDiv>
        {products
          .filter(
            (item: iItens, index) =>
              item.name.toLowerCase().includes("".toLowerCase()) || "" === ""
          )
          .map((item: iItens, index) => (
            <StyleCartSection key={index}>
              <ul className="ul">
                <li className="liImg">
                  <img src={item.img} alt="" />
                </li>
                <div className="divInfo">
                  <li>
                    <h3>{item.name}</h3>
                  </li>
                  <small>{item.category}</small>
                  <li>
                    <p>R$ {item.price}</p>
                  </li>
                  <li>
                    {/* <ToastContainer /> */}
                    <button
                    /* onClick={() => {
                        const itemOnList = currentSale.filter(
                          (itemFilter) => itemFilter.name === item.name
                        );

                        if (itemOnList.length === 0) {
                          setCurrentSale([...currentSale, item]);
                        } else {
                          alert();
                        }
                      }} */
                    >
                      Adicionar
                    </button>
                  </li>
                </div>
              </ul>
            </StyleCartSection>
          ))}
      </StyleCartDiv>
      {/*  <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} /> */}
    </StyleContainer>
  );
};

export default Cards;
