import { Box, Autocomplete } from "@mui/material";

const QuickCart = ({height, width}) => {
  return (
    <Box
      sx={{
        height: height ? height : "300px",
        width: width ? width : "300px",
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src="../../public/images/pwa/logo.png"
        alt="logo"
      />
    </Box>
  );
};

export default QuickCart;
