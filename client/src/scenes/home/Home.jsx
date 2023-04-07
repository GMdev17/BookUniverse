import TitlePage from "./TitlePage";
import ShoppingList from "./ShoppingList";
import { shades } from "../../theme";

const Home = () => {
  return (
    <div className="home">
      <TitlePage color={shades.secondary[400]} />
      <ShoppingList />
    </div>
  );
};

export default Home;
