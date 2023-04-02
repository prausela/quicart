import { Box, List } from "@mui/material";
import CheckableList from "../components/CheckableList";
import QuickCart from "../components/QuickCart";
import { grey } from "@mui/material/colors";

const AisleMapPage = ({currentList, setCurrentList, productList}) => {
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
          border: "1px solid #bdbdbd",
          marginBottom: 4
        }}
      >
        <img
          src="."
        />
      </Box>
      <CheckableList 
        items={currentList.products}
        productList={productList}
        myStyle={{
          marginBottom: "4rem"
        }}
      />
    </Box>
  )
}

export default AisleMapPage;