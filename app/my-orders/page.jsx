"use client";
import React, { useState } from "react";
import Image from "next/image";
import AccountSideBar from "../../components/AccountSideBar/Index";

// MUI
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Orders = () => {
  const [search, setSearch] = useState("");

  const orders = [
    {
      orderId: "ORD-101",
      image: "/prodImage1.webp",
      customer: "Suhail Khan",
      paymentId: "PAY-99821",
      name: "Suhail Khan",
      phone: "9876543210",
      address: "Bhopal, MP",
      pincode: "462001",
      totalAmount: "₹2,499",
      email: "suhail@gmail.com",
      userId: "USR-01",
      status: "Delivered",
      date: "15 Jan 2026",
    },
    {
      orderId: "ORD-102",
      image: "/prodImage1.webp",
      customer: "Aman Verma",
      paymentId: "PAY-77891",
      name: "Aman Verma",
      phone: "9123456789",
      address: "Indore, MP",
      pincode: "452001",
      totalAmount: "₹1,299",
      email: "aman@gmail.com",
      userId: "USR-02",
      status: "Processing",
      date: "14 Jan 2026",
    },
     {
      orderId: "ORD-102",
      image: "/prodImage1.webp",
      customer: "Aman Verma",
      paymentId: "PAY-77891",
      name: "Aman Verma",
      phone: "9123456789",
      address: "Indore, MP Gali 2",
      pincode: "452001",
      totalAmount: "₹1,299",
      email: "aman@gmail.com",
      userId: "USR-02",
      status: "Delivered",
      date: "14 Jan 2026",
    },
  ];

  // 🔍 Filter logic
  const filteredOrders = orders.filter((order) =>
    Object.values(order)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box sx={{ backgroundColor: "#f3f4f6", minHeight: "100vh", py: 4 }}>
      <Box className="container mx-auto flex gap-6">
        
        {/* Sidebar */}
        <Box sx={{ width: "20%" }}>
          <AccountSideBar />
        </Box>

        {/* Orders */}
        <Box sx={{ width: "80%" }}>
          <Card>
            <CardContent>

              {/* Heading + Search */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    My Orders
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Showing {filteredOrders.length} orders
                  </Typography>
                </Box>

                <TextField
                  size="small"
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{ width: 260 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Orders Table */}
              <TableContainer>
                <Table>
                  <TableHead sx={{ backgroundColor: "#f9fafb" }}>
                    <TableRow>
                      <TableCell><b>Product</b></TableCell>
                      <TableCell><b>Order ID</b></TableCell>
                      <TableCell><b>Customer</b></TableCell>
                      <TableCell><b>Payment ID</b></TableCell>
                      <TableCell><b>Phone</b></TableCell>
                      <TableCell><b>Address</b></TableCell>
                      <TableCell><b>Pincode</b></TableCell>
                      <TableCell><b>Total</b></TableCell>
                      <TableCell><b>Email</b></TableCell>
                      <TableCell><b>User ID</b></TableCell>
                      <TableCell><b>Status</b></TableCell>
                      <TableCell><b>Date</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order, index) => (
                        <TableRow key={index} hover>
                          <TableCell>
                            <Box
                              sx={{
                                width: 70,
                                height: 70,
                                position: "relative",
                                borderRadius: 1,
                                overflow: "hidden",
                                border: "1px solid #e5e7eb",
                              }}
                            >
                              <Image
                                src={order.image}
                                alt="product"
                                fill
                                className="object-cover w-full p-1"
                              />
                            </Box>
                          </TableCell>
                          <TableCell>{order.orderId}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.paymentId}</TableCell>
                          <TableCell>{order.phone}</TableCell>
                          <TableCell>{order.address}</TableCell>
                          <TableCell>{order.pincode}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>
                            {order.totalAmount}
                          </TableCell>
                          <TableCell>{order.email}</TableCell>
                          <TableCell>{order.userId}</TableCell>
                          <TableCell>
                            <Chip
                              label={order.status}
                              color={
                                order.status === "Delivered"
                                  ? "success"
                                  : "warning"
                              }
                              size="small"
                            />
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={12} align="center">
                          No orders found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography
                variant="caption"
                color="text.secondary"
                mt={2}
                display="block"
              >
                End of orders list
              </Typography>

            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
