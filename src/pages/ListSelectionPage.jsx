import { Box, Button } from "@mui/material";
import QuickCart from "../components/QuickCart";
import SavedLists from "../components/SavedLists";
import { useNavigate } from "react-router-dom";

const ListSelectionPage = ({ shoppingLists, setCurrentList, currentList }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        width: "90vw",
        margin: "auto",
      }}
    >
      <QuickCart />
      <Button
        variant="contained"
        sx={{
          width: "100%",
          py: 2,
          my: 4,
        }}
        onClick={() => {
          setCurrentList({ name: "Nueva lista", products: [] });
          navigate("/list");
        }}
      >
        Nueva lista de compras
      </Button>
      <SavedLists
        lists={shoppingLists}
        setCurrentList={setCurrentList}
        currentList={currentList}
      />
    </Box>
  );
};

export default ListSelectionPage;
