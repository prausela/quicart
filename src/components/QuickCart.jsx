import { Box } from "@mui/material";

const QuickCart = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "300px",
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
