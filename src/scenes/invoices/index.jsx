import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
    const columns = [
            { field: "id", headerName: "ID" },
            {field: "name", headerName: "Name", cellClassName:"name-column--cell", flex:1},
            { field: "phone", headerName: "Phone", flex:1 },
            { field: "email", headerName: "Email", flex:1 },
            { field: "cost", headerName: "Cost", flex:1, cellClassName:"cost-column--cell",},
            { field: "date", headerName: "Date", flex:1 }
            ]
    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle='Check monthly billings and invoices' />
                <Box m="40px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .cost-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                       
                        
                        }}>
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} s />
           </Box>
        </Box>
    )
}
export default Invoices;