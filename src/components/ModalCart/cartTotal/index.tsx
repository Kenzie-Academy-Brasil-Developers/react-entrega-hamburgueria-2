import { StyleCartTotal } from "./style";
import CartShopHeader from "../../../assets/img/cabecalho.svg";
import { StylesCartCard } from "../cartCard";
import BlackImg from "../../../assets/img/black_background.png";
import { useState } from "react";

interface iCurrentSale {
  currentSale: iItens[];
  setCurrentSale: React.ReactNode;
}

interface iItens {
  price: number;
}

interface iShowModal {
  setShowModal: (value: boolean) => void;
}

export const CartTotal = ({ setShowModal }: iShowModal) => {
  return (
    <div>
      <StyleCartTotal>
        <img src={BlackImg} alt="" className="background-black" />
        <div className="cart-container">
          <div className="cart">
            <div className="title-carts">
              <p className="title">Carrinho de Compras</p>
              <p
                onClick={() => {
                  setShowModal(false);
                }}
                className="button-x title"
              >
                x
              </p>
            </div>
            <div>
              <div className="divProductsCart">
                <StylesCartCard />
              </div>
              <div className="divTotalCart">
                <div className="divTotalInfo">
                  <small>Total</small>
                  <p>R$ 20</p>
                </div>
                <button>Remover todos</button>
              </div>
            </div>
          </div>
        </div>
      </StyleCartTotal>
    </div>
  );
};

export default CartTotal;
