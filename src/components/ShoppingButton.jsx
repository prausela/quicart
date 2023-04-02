import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ShoppingButton = ({shopping, currentList}) => {
  const navigate = useNavigate();

  const getMap = () => {
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        shoppingList: Object.keys(currentList),
        shopMap: shopping.map,
        N: shopping.rows,
        M: shopping.columns,
      }),
    };

    fetch("https://spicasso.pythonanywhere.com/", requestOptions)
      .then(response => {
        console.log(response.text());
        navigate("/map");
      })
      .catch(error => console.log('error', error));
  }

  return (
    <Button
      variant="contained"
      color={shopping.distance < 100 ? "primary" : "secondary"}
      sx={{
        width: "100%",
        py: 2,
        my: 1,
      }}
      onClick={() => getMap()}
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
            paddingRight: 2,
            minWidth: "20%"
          }}
        >
            <Typography
              variant="h1"
            >{shopping.distance > 1000 ? (shopping.distance / 1000).toFixed(1) + "km" : shopping.distance + "m"}</Typography>
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