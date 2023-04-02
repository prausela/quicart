import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListSelectionPage from "../pages/ListSelectionPage";
import MarketSelectionPage from "../pages/MarketSelectionPage";

const InterfaceController = ({shoppingLists, setCurrentList, shoppings, setShoppings}) => {

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={
            <ListSelectionPage 
              shoppingLists={shoppingLists}
              setCurrentList={setCurrentList}
            />
          }/>
          <Route path="/market" element={
            <MarketSelectionPage 
              shoppings={shoppings}
              setShoppings={setShoppings}
            />
          }/>
        </Route>
      </Routes>
      
    </Router>
  )
}

export default InterfaceController;