import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListSelectionPage from "../pages/ListSelectionPage";
import MarketSelectionPage from "../pages/MarketSelectionPage";
import AisleMapPage from "../pages/AisleMapPage";
import EditListPage from "../pages/EditListPage";

const InterfaceController = ({
  productList,
  setProductsList,
  shoppingLists,
  setShoppingLists,
  currentList,
  setCurrentList,
  shoppings,
  setShoppings,
}) => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ListSelectionPage
                shoppingLists={shoppingLists}
                setCurrentList={setCurrentList}
                currentList={currentList}
              />
            }
          />
          <Route
            path="/list"
            element={
              <EditListPage
                productsList={productList}
                currentList={currentList}
                setCurrentList={setCurrentList}
              />
            }
          />

          <Route
            path="/market"
            element={
              <MarketSelectionPage
                shoppings={shoppings}
                setShoppings={setShoppings}
                currentList={currentList}
              />
            }
          />
          <Route 
            path="/map" 
            element={
              <AisleMapPage 
                currentList={currentList}
                setCurrentList={setCurrentList}
                productList={productList}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default InterfaceController;
