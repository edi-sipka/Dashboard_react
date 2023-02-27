import { Box } from "@mui/material"
import Header from "../../components/Header";

const Team = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="TEAM" subtitle="Welcome to the Team page" />
            </Box>
        </Box>
    )
}

export default Team;