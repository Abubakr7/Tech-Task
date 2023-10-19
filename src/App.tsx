import { Box, Container, Grid, TextField } from "@mui/material";
import "./App.css";
import CountryCard from "./components/Card";
import Title from "./components/Title";
import { theme } from "./theme";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./apollo/countries";
import React, { useState } from "react";
import { Country, IResponseData } from "./types";

function App() {
  const [search, setSearch] = useState<string>("");
  const { data, loading, error, refetch } = useQuery(GET_COUNTRIES, {
    variables: {
      filter: {
        code: {
          ne: "",
        },
      },
    },
  });

  const hanleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
    if (event.target.value.trim().length === 0) {
      refetch({
        filter: {
          code: {
            ne: "",
          },
        },
      });
      return;
    }
    refetch({
      filter: {
        code: {
          in: event.target.value.trim(),
        },
      },
    });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="wrapper">
      <Container maxWidth="xl">
        <Grid container sx={{ paddingTop: 5, paddingBottom: 5 }}>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Title title="Countries" />
          </Grid>
          <Grid
            item
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
                value={search}
                onChange={hanleChange}
                fullWidth
                placeholder="Search by country code"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {data.countries.map((country: Country) => {
            console.log(country.code);
            return (
              <Grid item xs={12} md={4} lg={3} key={+country.phone}>
                <CountryCard country={country} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
