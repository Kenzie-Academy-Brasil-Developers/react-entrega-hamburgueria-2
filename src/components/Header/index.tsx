import Logo from "../../assets/img/logo.svg";
import ButtonSearch from "../../assets/img/button-search.svg";
import CartIcon from "../../assets/img/cart-icon.svg";
import LogoutIcon from "../../assets/img/logout-icon.svg";
import { StyleContainer } from "./style";
import { StyleHeader } from "./style";
import { useNavigate } from "react-router-dom";
import CartTotal from "../ModalCart/cartTotal";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface iShowModal {
  setShowModal: (value: boolean) => void;
}

const Header = ({ setShowModal }: iShowModal) => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyleHeader>
      <StyleContainer>
        <div className="container">
          <img src={Logo} alt="" />
          <div className="icons-menu">
            <div className="container-input">
              <div className="input">
                <input
                  type="text"
                  placeholder="Digite sua pesquisa..."
                  id="search"
                />
                <img
                  className="imgSearch"
                  src={ButtonSearch}
                  alt="" /* onClick={() => {
                const searchValue = document.getElementById("search").value;
                setFilterName(searchValue);
              }} */
                />
              </div>
            </div>

            <img
              onClick={() => {
                setShowModal(true);
              }}
              className="imgIcon"
              src={CartIcon}
              alt=""
            />
            <img
              onClick={() => {
                logout();
              }}
              className="imgIcon"
              src={LogoutIcon}
              alt=""
            />
          </div>
        </div>
      </StyleContainer>
    </StyleHeader>
  );
};

export default Header;
