import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import QuickCart from "../components/QuickCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const EditListPage = ({ currentList, setCurrentList, productsList }) => {
  const [option, setOption] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTrigger(!trigger);
  }, [currentList]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <QuickCart />
      <Autocomplete
        sx={{ width: "90%", mx: "auto", mb: 2 }}
        options={productsList}
        getOptionLabel={(option) => option.name}
        blurOnSelect={true}
        autoComplete
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Busque productos" />
        )}
        value={option}
        onChange={(event, newValue) => {
          setOption(newValue);
          let listName = currentList.name;
          let currentIdList = [...currentList.products];

          if (!currentIdList.includes(newValue.id)) {
            setCurrentList({
              name: listName,
              products: [...currentIdList, newValue.id],
            });
          }
        }}
        disableClearable
      />
      {Object.keys(currentList).length > 0 ? (
        <Typography
          variant="p"
          color="neutral.main"
          sx={{ textAlign: "left", width: "90%", ml: "0" }}
        >
          Su lista de compras contiene {currentList.products.length} productos
        </Typography>
      ) : null}
      <List sx={{ width: "90%", my: 3, overflow: "auto", height: "40vh" }}>
        {Object.keys(currentList).length
          ? currentList.products.map((productId) => (
              <ListItem
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={productId}
              >
                <Typography variant="p" color="neutral.main">
                  {productsList.find((p) => p.id === productId).name}
                </Typography>
                <DeleteIcon
                  sx={{
                    cursor: "pointer",
                    color: "neutral.main",
                    "&:hover": { color: "error.dark" },
                  }}
                  onClick={() => {
                    let listName = currentList.name;
                    let listProducts = [...currentList.products];

                    listProducts = listProducts.filter(
                      (id) => id !== productId
                    );

                    setCurrentList({
                      name: listName,
                      products: listProducts,
                    });
                  }}
                />
              </ListItem>
            ))
          : null}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Button
          disabled={currentList.products.length === 0}
          variant="outlined"
          color="secondary"
          sx={{
            width: "48%",
            py: 1,
          }}
        >
          Guardar lista
        </Button>
        <Button
          disabled={currentList.products.length === 0}
          variant="contained"
          onClick={() => navigate("/market")}
          sx={{
            width: "48%",
            py: 1,
          }}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default EditListPage;
