import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import QuickCart from "../components/QuickCart";
import DeleteIcon from "@mui/icons-material/Delete";

const EditListPage = ({ currentList, setCurrentList, productsList }) => {
  const [option, setOption] = useState(null);

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
          if (!currentList.includes(newValue)) {
            setCurrentList([...currentList, newValue]);
          }
        }}
        disableClearable
      />
      {currentList.length > 0 ? (
        <Typography
          variant="p"
          color="neutral.main"
          sx={{ textAlign: "left", width: "90%", ml: "0" }}
        >
          Su lista de compras contiene {currentList.length} productos
        </Typography>
      ) : null}
      <List sx={{ width: "90%", my: 3, overflow: "auto", height: "40vh" }}>
        {currentList.length > 0
          ? currentList.map((product) => (
              <ListItem
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={product.id}
              >
                <Typography variant="p" color="neutral.main">
                  {product.name}
                </Typography>
                <DeleteIcon
                  sx={{
                    cursor: "pointer",
                    color: "neutral.main",
                    "&:hover": { color: "error.dark" },
                  }}
                  onClick={() => {
                    setCurrentList(
                      currentList.filter((p) => p.id !== product.id)
                    );
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
          variant="contained"
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
