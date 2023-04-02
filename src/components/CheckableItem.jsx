import { Box, Button, Checkbox, Typography } from "@mui/material"

const CheckableItem = ({isChecked, onCheck, title}) => {

  return (
    <Button
      variant="contained"
      color={isChecked ? "lightGrey" : "secondary" }
      sx={{
        width: "100%",
        py: 2,
        my: 1,
      }}
      onClick={onCheck}
    >
      <Box sx={{
        display: "flex",
        width: "100%",
        alignItems: "center"
      }}>
        <Box
          sx={{
            paddingRight: 2,
            paddingLeft: 1
          }}
        >
          {
            isChecked ? (
              <Checkbox 
                color="black" 
                sx={{ padding:0, '& .MuiSvgIcon-root': { fontSize: 35 } }}
                checked={isChecked}
              />
            ) : ""
          }
          
        </Box>
        <Box>
          <Typography variant="h2" >{title}</Typography>
        </Box>
      </Box>
      
    </Button>
  )
}

export default CheckableItem;