// src/pages/Dashboard.styles.ts
import { Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#f4f6f8",
  minHeight: "100vh",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fdfdfd",
  border: "1px solid #e0e0e0",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.01)",
  },
}));
