import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { player: "", }
]

function StatGrid() {
    return (
        <>
        <DataGrid
        rows={rows}
        columns={columns}
        </>
    )
}

export default StatGrid;