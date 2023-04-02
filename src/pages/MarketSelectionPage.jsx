import { Box, Button, List, TextField } from "@mui/material";
import QuickCart from "../components/QuickCart";
import ShoppingButton from "../components/ShoppingButton";
import { useEffect, useState } from "react";

const MarketSelectionPage = ({currentList, shoppings, setShoppings}) => {
  const [filteredShoppings, setFilteredShoppings] = useState(shoppings.sort((a, b) => {
    if (a.distance > b.distance) return 1;
    if (a.distance < b.distance) return -1;
    return 0;
  }));
  
  const [filteringKeyWord, setFilteringKeyWord] = useState("");

  useEffect(() => {
    setFilteredShoppings(shoppings.filter(shopping => shopping.name.substring(0, filteringKeyWord.length).toUpperCase() == filteringKeyWord.substring(0, filteringKeyWord.length).toUpperCase()))
  },[filteringKeyWord]);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxHeight: "100vh",
        width: "90vw",
        margin: "auto"
      }}
    >
      <Box sx={{
        alignSelf: "center"
      }}>
        <QuickCart />
      </Box>
      <Box sx={{
        py: 2,
        my: 1,
      }}>
        <TextField 
          id="filter-market" 
          label="Buscar Supermercado" 
          variant="outlined"
          value={filteringKeyWord}
          onChange={(e) => setFilteringKeyWord(e.target.value)}
          sx={{
            width: "100%"
          }}
        />
      </Box>
      <List
        sx={{
          overflow: "auto",
          marginBottom: "4rem"
        }}
      >
      {
        filteredShoppings.map(shopping => (
          <ShoppingButton
            shopping={shopping}
            key={shopping.id}
            currentList={currentList}
          />
        ))
      }
      </List>      
    </Box>
  )
}

export default MarketSelectionPage;