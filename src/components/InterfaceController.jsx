import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListSelectionPage from "../pages/ListSelectionPage";

const InterfaceController = ({shoppingLists, setCurrentList}) => {

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
        </Route>
      </Routes>
      
    </Router>
  )
}

export default InterfaceController;