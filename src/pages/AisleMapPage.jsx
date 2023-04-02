import { Box, Button, List, Typography } from "@mui/material";
import CheckableList from "../components/CheckableList";
import QuickCart from "../components/QuickCart";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const AisleMapPage = ({currentList, setCurrentList, productList, imageMap}) => {
  const navigate = useNavigate();
  const imgSource = "data:image/png;base64, " + imageMap;
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <QuickCart 
          width={"100px"}
          height={"100px"}
        />
      </Box>
      <Box
        sx={{
          minHeight: "30vh",
          marginBottom: 4
        }}
      >
      <img src={imgSource} alt="Red dot" style={{
        aspectRatio: "auto",
        height: "300px"
      }}/>
      </Box>
      <CheckableList 
        items={currentList.products}
        productList={productList}
        myStyle={{
          marginBottom: "2.5rem",
          flexGrow: 1
        }}
      />
      <Button
        variant="contained"
        sx={{
          my: 4
        }}
        onClick={() => navigate("/")}
      >
        <Typography variant="h2">Finalizar Compra</Typography>
      </Button>
    </Box>
  )
}

export default AisleMapPage;