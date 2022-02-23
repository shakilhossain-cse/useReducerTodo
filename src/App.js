import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormGroup,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <FormGroup>
        <TextField
          id="standard-basic"
          label="type your todo"
          sx={{ width: "100%" }}
          variant="outlined"
        />
        <Button variant="contained" sx={{ my: "1rem" }}>
          Create
        </Button>
      </FormGroup>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemText primary="Brunch this weekend?" />
          <ButtonGroup size="small" aria-label="small button group">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </ListItem>

        <Divider variant="inset" component="li" />
      </List>
    </Box>
  );
}

export default App;
