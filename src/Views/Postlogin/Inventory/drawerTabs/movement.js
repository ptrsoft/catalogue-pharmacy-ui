import * as React from "react";
import { useSelector } from "react-redux";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

const Movement = () => {
  const orders = useSelector((state) => state.ordersInInventory.orders.data);


  return (
    <div style={{padding:"20px"}}>
      <Table
        variant="borderless"
        renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
          `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
        }
        columnDefinitions={[
          {
            id: "order_id",
            header: "Movement Type",
            cell: (e) => e.order_id,
           
            isRowHeader: true
          },
          {
            id: "date",
            header: "Movement Date",
            cell: (e) => e.date,
         
            sortingField: "date"
          },
          {
            id: "location",
            header: "Location",
            cell: (e) => e.location,
         
            sortingField: "location"
          },
          {
            id: "quantity",
            header: "Quantity",
            cell: (e) => e.quantity,
           
            sortingField: "quantity"
          },
        ]}
        enableKeyboardNavigation
        items={orders}
        loadingText="Loading resources"
        resizableColumns
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Create resource</Button>
            </SpaceBetween>
          </Box>
        }
      />
    </div>
  );
};

export default Movement;