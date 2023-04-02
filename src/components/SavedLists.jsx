import { Box, Typography, List } from "@mui/material";
import { theme } from "../styles/theme";

const SavedLists = ({ lists, setCurrentList }) => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {lists.map((elem) => (
        <Typography
          variant="body1"
          onClick={() => setCurrentList(elem)}
          sx={{
            border: "1px solid black",
            height: "50px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            "box-shadow": "-15px 11px 25px -1px ",
            "-webkit-box-shadow": "-15px 11px 25px -1px rgba(0,0,0,0.4)",
            "-moz-box-shadow": "-15px 11px 25px -1px rgba(0,0,0,0.4)",
            "&:hover": {
              backgroundColor: "secondary.main",
              cursor: "pointer",
              "box-shadow": "-15px 11px 25px -1px rgba(0,0,0,0.5)",
              "-webkit-box-shadow": "-15px 11px 25px -1px rgba(0,0,0,0.5)",
              "-moz-box-shadow": "-15px 11px 25px -1px rgba(0,0,0,0.5)",
            },
          }}
          py={1}
          px={2}
          my={1}
        >
          {elem.name}
        </Typography>
      ))}
    </List>
  );
};

export default SavedLists;
