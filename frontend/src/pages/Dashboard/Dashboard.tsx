import { useEffect, useState } from "react";
import axios from "../../services/api";
import {
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Divider,
} from "@mui/material";
import OrderCard from "../../components/OrderCard/OrderCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import { Order } from "../../types";

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    axios.get("/orders").then((res) => setOrders(res.data));
  }, []);

  const handleStatusChange = (id: string, newStatus: string) => {
    axios.patch(`/orders/${id}`, { status: newStatus }).then(() => {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
    });
  };

  const filteredOrders = orders.filter((order) => {
    const matchesName = order.customerName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    return matchesName && matchesStatus;
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [search, statusFilter]);

  return (
    <>
      <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          mb={3}
          position={"sticky"}
          top={0}
          zIndex={99}
          bgcolor="#fff"
          p={2}
          boxShadow={1}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
              Restaunax Order Management
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FilterBar
              search={search}
              onSearchChange={setSearch}
              status={statusFilter}
              onStatusChange={setStatusFilter}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} p={4}>
          {filteredOrders.map((order) => (
            <Grid item xs={12} sm={6} md={4} key={order.id}>
              <OrderCard
                order={order}
                onStatusChange={handleStatusChange}
                onClick={() => setSelectedOrder(order)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Order Details</DialogTitle>
        {selectedOrder && (
          <>
            <DialogContent>
              <DialogContentText
                component="div"
                sx={{ backgroundColor: "#fafafa", p: 2, borderRadius: 2 }}
              >
                <Typography>
                  <strong>Customer:</strong> {selectedOrder.customerName}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {selectedOrder.customerEmail}
                </Typography>
                <Typography>
                  <strong>Status:</strong> {selectedOrder.status}
                </Typography>
                <Typography>
                  <strong>Type:</strong> {selectedOrder.orderType}
                </Typography>
                <Typography>
                  <strong>Total:</strong> ${selectedOrder.total.toFixed(2)}
                </Typography>
                <Typography>
                  <strong>Scheduled For:</strong>{" "}
                  {selectedOrder.scheduledFor || "N/A"}
                </Typography>
                <Typography>
                  <strong>Preparation Notes:</strong>{" "}
                  {selectedOrder.preparationNotes}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1">
                  <strong>Items:</strong>
                </Typography>
                {selectedOrder.items.map((item) => (
                  <Typography key={item.id}>
                    - {item.name} x{item.quantity} @ ${item.price.toFixed(2)}
                    {item.specialInstructions
                      ? ` (${item.specialInstructions})`
                      : ""}
                  </Typography>
                ))}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedOrder(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
