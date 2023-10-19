import {
  AttachMoney,
  CurrencyFranc,
  CurrencyRuble,
  CurrencyYen,
  InterpreterMode,
  LocalPhone,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import { TPropsCard } from "../types";

const CountryCard = (props: TPropsCard) => {
  const { country } = props;
  return (
    <Card sx={{ minWidth: 275, borderRadius: 5 }}>
      <CardContent>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box component={"div"} sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ alignSelf: "center", fontSize: "2rem" }}>
              {country.emoji}
            </Box>
            <Box
              component={"div"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "11rem",
                }}
              >
                <Tooltip title={country.name}>
                  <Typography variant="h6" noWrap>
                    {country.name}
                  </Typography>
                </Tooltip>
              </div>

              <Typography variant="body1">{country.capital}</Typography>
            </Box>
          </Box>
          <Box component={"div"}>Asia</Box>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
        <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
          <LocalPhone fontSize="small" />
          <Tooltip title={country.phone}>
            <Typography variant="body2">
              {country.phone
                ? country.phone.split(",").slice(0, 2).join(",")
                : ""}
            </Typography>
          </Tooltip>
        </Box>
        <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
          <Box component={"div"}>
            <Box component={"div"} sx={{ display: "flex" }}>
              <AttachMoney fontSize="small" sx={{ fontSize: 10 }} />
              <CurrencyYen fontSize="small" sx={{ fontSize: 10 }} />
            </Box>
            <Box component={"div"} sx={{ display: "flex" }}>
              <CurrencyFranc fontSize="small" sx={{ fontSize: 10 }} />
              <CurrencyRuble fontSize="small" sx={{ fontSize: 10 }} />
            </Box>
          </Box>
          <Tooltip title={country.currency}>
            <Typography variant="body2">
              {country.currency
                ? country.currency.split(",").slice(0, 3).join(",")
                : ""}
            </Typography>
          </Tooltip>
        </Box>
        <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
          <InterpreterMode fontSize="small" />
          {country.languages
            .slice(0, 2)
            .filter((elem) => elem.native.length <= 7).length === 0
            ? country.languages.slice(0, 1).map((language, index, arr) => {
                if (language.rtl) {
                  return (
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "right", fontSize: 12 }}
                    >
                      {language.native} {index !== arr.length - 1 && ","}
                    </Typography>
                  );
                }
                return (
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    {language.native}
                    {index !== arr.length - 1 && ","}
                  </Typography>
                );
              })
            : country.languages
                .slice(0, 2)
                .filter((elem) => elem.native.length <= 7)
                .map((language, index, arr) => {
                  if (language.rtl) {
                    return (
                      <Typography
                        variant="body2"
                        sx={{ textAlign: "right", fontSize: 12 }}
                      >
                        {language.native} {index !== arr.length - 1 && ","}
                      </Typography>
                    );
                  }
                  return (
                    <Typography variant="body2" sx={{ fontSize: 12 }}>
                      {language.native}
                      {index !== arr.length - 1 && ","}
                    </Typography>
                  );
                })}
        </Box>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
