import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';



const paginationModel = { page: 0, pageSize: 5 };

export default function Grid({isPagination, height, columns, rows}:any) {
  return (
    <Paper sx={{ height: height, width: "100%", overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination={isPagination}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          height: "100%",  // Ensures it takes full height of Paper
          "& .MuiDataGrid-virtualScroller": {
            overflow: "auto", // Enables vertical scrolling inside the grid
          },
        }}
      />
    </Paper>

  );
}
