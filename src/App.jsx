import Counter from "./component/common/counter/counter";
import CounterConteiner from "./component/common/counter/CounterConteiner";
import Navbar from "./component/layouts/Navbar/Navbar";
import ItemdetailContainer from "./component/pages/itemDetail/ItemdetailContainer";
import ItemListConteiner from "./component/pages/itemListContainer/itemListConteiner";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListConteiner /> */}
      <ItemdetailContainer />

      <CounterConteiner />
    </div>
  );
}

export default App;
