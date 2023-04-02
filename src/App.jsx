import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { ShopTile } from "./tiles/tile";
import { ShelfTile } from "./tiles/shelfTile";
import { TILE_TYPE } from "./tiles/tileType";
import SavedLists from "./components/SavedLists";
import { Box } from "@mui/system";
import  QuickCart  from "./components/QuickCart";

function App() {
  const [productList, setProductList] = useState([
    { id: 1, name: "Leche La Serenísima 1L" },
    { id: 2, name: "Palta Hass 1u" },
    { id: 3, name: "Vivere Suavizante Clásico" },
    { id: 4, name: "Suprema de Pollo 1kg" },
    { id: 5, name: "Lomo Premium 1kg" },
    { id: 6, name: "Milanesa Nalga 1kg" },
    { id: 7, name: "Bife de Chorizo 1kg" },
    { id: 8, name: "Beefeater London Dry Gin 1L" },
    { id: 9, name: "Aperitivo Campari 750cc" },
    { id: 10, name: "Cerveza Heineken" },
    { id: 11, name: "Oreo Galletas" },
    { id: 12, name: "Finlandia Queso Untable" },
    { id: 13, name: "Cebolla Blanca 1kg" },
    { id: 14, name: "Limón 1u" },
    { id: 15, name: "Pera 1u" },
    { id: 16, name: "Yogurisimo Natural" },
    { id: 17, name: "Leche Condensada" },
    { id: 18, name: "Crema de Leche Tonadita 200cc" },
    { id: 19, name: "Manteca La Serenísima" },
    { id: 20, name: "Sprite Light 1L" },
    { id: 21, name: "Coca-Cola Original 2.25l" },
    { id: 22, name: "Arvejas Remojadas en Lata" },
    { id: 23, name: "Ketchup Hellmann's" },
    { id: 24, name: "Pure de Tomates" },
    { id: 25, name: "Fideos Don Vincente" },
    { id: 26, name: "Arroz Dos Hermanos" },
    { id: 27, name: "Aceite de Girasol Pureza" },
    { id: 28, name: "Vinagre de Alcohol" },
    { id: 29, name: "Giacomo Capelletini Tricolor" },
    { id: 30, name: "Dulce de Leche La Serenísima" },
    { id: 31, name: "Miel Aleluya" },
    { id: 32, name: "El Brocal Mermelada de Ciruela" },
    { id: 33, name: "Alicante Orégano" },
    { id: 34, name: "Sal Fina" },
    { id: 35, name: "Playadito Yerba Mate" },
    { id: 36, name: "Papel Higiénico Elite" },
    { id: 37, name: "Procenex Limpiador Lavanda" },
    { id: 38, name: "Jamón Cocido Paladini" },
    { id: 39, name: "Malbec Alma Mora" },
    { id: 40, name: "Pilas Duracell" },
  ]);

  const [shoppingLists, setShoppingLists] = useState([
    {
      name: "Cena Familiar",
      products: [2, 4, 26, 27, 14, 31, 34, 28, 38, 33, 23, 20, 21],
    },
    {
      name: "Compra Semanal",
      products: [3, 36, 37, 38, 24, 25, 29, 35, 11, 8],
    },
  ]);

  //productId: isChecked
  const [currentList, setCurrentList] = useState([]);

  const [shoppings, setShoppings] = useState([
    {
      id: 1,
      name: "Carrefour Retiro",
      distance: "1.5km",
      address: "Arroyo 810",
      map: [
        [
          new ShopTile(TILE_TYPE.AISLE, 0, 0),
          new ShopTile(TILE_TYPE.AISLE, 0, 1),
          new ShopTile(TILE_TYPE.AISLE, 0, 2),
        ],
        [
          new ShelfTile(1, 0, "Carnicería", [4, 5, 6, 7]),
          new ShopTile(TILE_TYPE.AISLE, 1, 1),
          new ShelfTile(1, 2, "Lácteos-1", [1, 12, 16]),
        ],
        [
          new ShopTile(TILE_TYPE.REG, 2, 0),
          new ShopTile(TILE_TYPE.AISLE, 2, 1),
          new ShelfTile(2, 2, "Lácteos-2", [18, 19]),
        ],
      ],
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "90vw",
        margin: "0 auto",
      }}
    >
      <QuickCart/>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          py: 2,
        }}
        onClick={() => console.log("holi")}
      >
        Nueva lista de compras
      </Button>
      <SavedLists lists={shoppingLists} setCurrentList={setCurrentList} />
    </Box>
  );
}

export default App;
