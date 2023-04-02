import { Box, Typography, List, Button } from "@mui/material";
import { theme } from "../styles/theme";

const SavedLists = ({ lists, setCurrentList }) => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="body1" color="neutral.main" p={1}>
        Listas de compras guardadas
      </Typography>
      {lists.map((elem) => (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "100%",
            py: 2,
            my: 1,
          }}
          onClick={() => console.log("holi")}
        >
          {elem.name}
        </Button>
      ))}
    </List>
  );
};

export default SavedLists;
