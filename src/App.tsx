import { Box, Container, Grid, TextField } from "@mui/material";
import "./App.css";
import CountryCard from "./components/Card";
import Title from "./components/Title";
import { theme } from "./theme";

function App() {
  return (
    <div className="wrapper">
      <Container maxWidth="xl">
        <Grid container sx={{ paddingTop: 5, paddingBottom: 5 }}>
          <Grid xs={12} sx={{ mb: 3 }}>
            <Title title="Countries" />
          </Grid>
          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: theme.seachBox.borderRadius,
                width: theme.seachBox.width,
                backgroundColor: theme.colors.primary,
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Search by country code"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
