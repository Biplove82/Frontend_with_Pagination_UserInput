import React, { useState } from "react";
import { Grid, Input, Stack, Pagination, Button } from "@mui/material";

const Table = () => {
  const [data, setData] = useState([
    {
      Date: "12 march 2024",
      MobileNumber: { type: Input },
      User: "John",
      CostCode: "CC-123",
      Amount: "$50.00",
      Description: "Wl- westlaw core",
    },
    {
      Date: "12 march 2024",
      MobileNumber: { type: Input },
      User: "John",
      CostCode: "CC-123",
      Amount: "$50.00",
      Description: "Wl- westlaw core",
    },
    {
      Date: "12 march 2024",
      MobileNumber: { type: Input },
      User: "John",
      CostCode: "CC-123",
      Amount: "$50.00",
      Description: "Wl- westlaw core",
    },
    {
      Date: "12 march 2024",
      MobileNumber: { type: Input },
      User: "John",
      CostCode: "CC-123",
      Amount: "$50.00",
      Description: "Wl- westlaw core",
    },
    {
      Date: "12 march 2024",
      MobileNumber: { type: Input },
      User: "John",
      CostCode: "CC-123",
      Amount: "$50.00",
      Description: "Wl- westlaw core",
    },
  ]);

  //pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // for phone number submittion
  const handleMobileNumberChange = (event, index) => {
    const newData = [...data];
    newData[index].MobileNumber.value = event.target.value;
    setData(newData);
  };

// for submission mobile number
  const handleSubmit = () => {
    const mobileNumbers = data
      .map((item) => item.MobileNumber.value)
      .filter((value) => value !== "");
    console.log("Submitted Mobile Numbers", mobileNumbers);
  };

  return (
    <div
      style={{
        backgroundClip:"#F5F5DC",
     
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "20px",
      }}
    >
      <Grid container spacing={2} className="grid-container">
  
        <Grid item xs={2}>
          <b>Mobile Number</b>
        </Grid>
        <Grid item xs={2}>
          <b>Date</b>
        </Grid>
        <Grid item xs={2}>
          <b>User</b>
        </Grid>
        <Grid item xs={2}>
          <b>Cost Code</b>
        </Grid>
        <Grid item xs={2}>
          <b>Amount</b>
        </Grid>
        <Grid item xs={2}>
          <b>Description</b>
        </Grid>
        {paginatedData.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={2}>
              <Input {...item.MobileNumber}
            //   value={item.MobileNumber}
              onChange={(event) => handleMobileNumberChange(event, index)} />
            </Grid>
            <Grid item xs={2}>
              {item.Date}
            </Grid>
            <Grid item xs={2}>
              {item.User}
            </Grid>
            <Grid item xs={2}>
              {item.CostCode}
            </Grid>
            <Grid item xs={2}>
              {item.Amount}
            </Grid>
            <Grid item xs={2}>
              {item.Description}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size="large"
        style={{ marginTop: "20px", display: "inline-block" }}
      />

      <Button
        variant="contained"
        color="primary"
      
        onClick={handleSubmit}
        style={{ marginTop: "1px", padding: "8px", display: "inline-block",marginLeft:"20px"}}
      >
        Submit
      </Button>
    </div>
  );
};

export default Table;
