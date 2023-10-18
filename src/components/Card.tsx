import {
  AttachMoney,
  CurrencyFranc,
  CurrencyRuble,
  CurrencyYen,
  InterpreterMode,
  LocalPhone,
} from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";

const CountryCard = () => {
  return (
    <Card sx={{ minWidth: 275, borderRadius: 5 }}>
      <CardContent>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box component={"div"} sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ background: "red" }}>emoji</Box>
            <Box
              component={"div"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6">Tajikistan</Typography>
              <Typography variant="body1">Dushanbe</Typography>
            </Box>
          </Box>
          <Box component={"div"}>Asia</Box>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
        <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
          <LocalPhone fontSize="small" />
          <Typography variant="body2">998</Typography>
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
          <Typography variant="body2">TJS</Typography>
        </Box>
        <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
          <InterpreterMode fontSize="small" />
          <Typography variant="body2">
            {["Точики", "Русский", "Узбек"].join(", ")}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
