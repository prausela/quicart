import { Box, Button, Typography } from "@mui/material";

const ShoppingButton = ({shopping}) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        width: "100%",
        py: 2,
        my: 1,
      }}
      onClick={() => console.log("Holi")}
      key={shopping.id}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%"
        }}
      >
        <Box
          sx={{
            paddingRight: 2
          }}
        >
          <Typography
            variant="h1"
          >{shopping.distance}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start"
          }}
        >
          <Typography variant="h2">{shopping.name}</Typography>
          
          <Typography>{shopping.address}</Typography>
        </Box>
        
      </Box>
      
    </Button>
  )
}

export default ShoppingButton;