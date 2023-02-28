import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
    const columns = [
            { field: "id", headerName: "ID" },
            {field: "name", headerName: "Name", cellClassName:"name-column--cell", flex:1},
            { field: "age", headerName: "Age", type:"number", align:"left", headerAlign:"left" },
            { field: "phone", headerName: "Phone", flex:1 },
            { field: "email", headerName: "Email", flex:1 }]
    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Welcome to the Team page" />
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
                        }
                        }}>
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
           </Box>
        </Box>
    )
}
export default Team;