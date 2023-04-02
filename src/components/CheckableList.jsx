import { List } from "@mui/material";
import CheckableItem from "./CheckableItem";
import { useState } from "react";

const CheckableList = ({items, productList, myStyle}) => {
  const products = items ? items.map(item => ({
    id: item,
    name: productList.find(product => product.id == item).name
  })) : [];

  const [uncheckedItems, setUncheckedItems] = useState(products ? products : []);
  const [checkedItems, setCheckedItems] = useState([]);

  console.log(uncheckedItems)

  const checkItem = (id) => {
    const itemToCheck = uncheckedItems.find(item => item.id == id);
    setUncheckedItems(uncheckedItems.filter(item => item.id != id));
    setCheckedItems([itemToCheck, ...checkedItems]);
  }

  const uncheckItem = (id) => {
    const itemToUncheck = checkedItems.find(item => item.id == id);
    setCheckedItems(checkedItems.filter(item => item.id != id));
    setUncheckedItems([itemToUncheck, ...uncheckedItems]);
  }

  return (
    <List
      sx={{
        overflowY: "auto",
        ...myStyle
      }}
    >
      { 
        uncheckedItems ? uncheckedItems.map(item => (
          <CheckableItem 
            title={item.name}
            isChecked={false}
            onCheck={() => checkItem(item.id)}
            key={item.id}
          />
        )) : ""
      }

      { 
        checkedItems ? checkedItems.map(item => (
          <CheckableItem 
            title={item.name}
            isChecked={true}
            onCheck={() => uncheckItem(item.id)}
            key={item.id}
          />
        )) : ""
      }
      
    </List>  
  )
}

export default CheckableList;