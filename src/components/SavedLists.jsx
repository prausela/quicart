import { Box, Typography, List, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SavedLists = ({ lists, currentList, setCurrentList }) => {
  const navigate = useNavigate();
  console.log(currentList);

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {lists.length > 0 && (
        <Typography variant="body1" color="neutral.main" p={1}>
          Listas de compras guardadas
        </Typography>
      )}
      {lists.map((elem, index) => (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "100%",
            py: 2,
            my: 1,
          }}
          onClick={() => {
            setCurrentList(elem);
            navigate("/list");
          }}
          key={index}
        >
          {elem.name}
        </Button>
      ))}
    </List>
  );
};

export default SavedLists;
