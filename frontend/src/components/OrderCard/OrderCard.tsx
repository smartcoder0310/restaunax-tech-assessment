import {
    Paper,
    Stack,
    Typography,
    Avatar,
    Box,
    Divider,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem
  } from "@mui/material";
  import PersonIcon from "@mui/icons-material/Person";
  
  type OrderCardProps = {
    order: any;
    onStatusChange: (id: string, newStatus: string) => void;
    onClick: () => void;
  };
  
  const OrderCard = ({ order, onStatusChange, onClick }: OrderCardProps) => {
    return (
      <Paper
        sx={{
          backgroundColor: "#fdfdfd",
          border: "1px solid #e0e0e0",
          p: 3,
          borderRadius: 3,
          transition: "0.2s",
          "&:hover": { boxShadow: 6, transform: "scale(1.01)" },
          cursor: "pointer"
        }}
        onClick={onClick}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Box>
              <Typography variant="h6">{order.customerName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {order.customerEmail}
              </Typography>
            </Box>
          </Stack>
  
          <Divider />
  
          <Stack direction="row" spacing={1}>
            <Chip label={order.status} color="primary" size="small" />
            <Chip label={order.orderType} variant="outlined" size="small" />
          </Stack>
  
          <Typography variant="body2">
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </Typography>
  
          <FormControl fullWidth size="small">
            <InputLabel>Update Status</InputLabel>
            <Select
              value={order.status}
              label="Update Status"
              onChange={(e) => onStatusChange(order.id, e.target.value)}
            >
              {["pending", "confirmed", "preparing", "ready", "delivered", "completed"].map(
                (status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Stack>
      </Paper>
    );
  };
  
  export default OrderCard;