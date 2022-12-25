import { useContext, useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import CartTotal from "../../components/ModalCart/cartTotal";
import { UserContext } from "../../context/UserContext";
import { StyleHome } from "./style";

interface iItens {
  item: Object;
  name: "string";
  img: "string";
  category: "string";
  price: number;
}

export const Home = () => {
  const { login } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <StyleHome>
      <Header setShowModal={setShowModal} />
      <Cards />
      {showModal ? <CartTotal setShowModal={setShowModal} /> : <div></div>}
    </StyleHome>
  );
};

export default Home;
