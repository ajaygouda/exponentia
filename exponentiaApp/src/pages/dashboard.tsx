import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Grid from "../components/grid";
import CutomChip from "../components/ui/chip";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { Box, Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import PieChartWithCenterLabel from "./pieChart";
import BarLabel from "./bar";
const columns: GridColDef[] = [
  { field: 'assetName', headerName: 'Asset Name', width: 180 },
  { field: 'assetType', headerName: 'Asset Type' },
  { field: 'qty', headerName: 'Quantity' },
  { field: 'currentPrice', headerName: 'Current Price($)', width: 120 },
  { field: 'totalValue', headerName: 'Total Value($)', width: 100 },
  { field: 'return', headerName: 'Return(%)' },
  { field: 'startDate', headerName: 'Start Date' },
  {
    field: 'riskLevel', headerName: 'Risk Level', width: 120, renderCell: (params: GridRenderCellParams) => {
      return (
        <CutomChip title={params.value === 1 ? "Low" : params.value === 2 ? "Medium" : "High"} size="small" color={params.value === 1 ? "success" : params.value === 2 ? "warning" : "error"} />
      )
    }
  },
  { field: 'industry', headerName: 'Sec/Industry' },
  { field: 'divident', headerName: 'Divident/Yield(%)', width: 130 },
  { field: 'marketCap', headerName: 'Market Cap ($B)', width: 130 },

];

const columns1: GridColDef[] = [
  { field: 'assetName', headerName: 'Name', width: 180 },
  { field: 'assetType', headerName: 'Type' },
  { field: 'return', headerName: 'ROI(%)' },
  { field: 'totalValue', headerName: 'Total Value($)'},

];

const rows: any = [
  {
    id: 1, assetName: 'HDFC Bank', assetType: 'Stock', qty: 35, currentPrice: 17452, totalValue: 254562, return: 5245, startDate: "10/05/2000", riskLevel: 2, industry: "banking", divident: 1.2, marketCap: 2800
  },
  {
    id: 2, assetName: 'Reliance Industries', assetType: 'Stock', qty: 35, currentPrice: 17452, totalValue: 254562, return: 5245, startDate: "10/05/2000", riskLevel: 1, industry: "Oil/Gas", divident: 1.2, marketCap: 2800
  },
  {
    id: 3, assetName: 'Apple Inc.', assetType: 'Stock', qty: 35, currentPrice: 17452, totalValue: 254562, return: 5245, startDate: "10/05/2000", riskLevel: 3, industry: "Technology", divident: 1.2, marketCap: 2800
  },
];
const rows1: any = [

  {
    id: 2, assetName: 'Reliance Industries', assetType: 'Stock', qty: 35, currentPrice: 17452, totalValue: 254562, return: 5245, startDate: "10/05/2000", riskLevel: 1, industry: "Oil/Gas", divident: 1.2, marketCap: 2800
  },

];
const Dashboard = () => {
  const [value, setValue] = useState<any>(10);

  return (
    <>
      <Box className="cards" sx={{ display: "flex", gap: 3, mb: 3 }}>
        <Card sx={{ width: "25%" }}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 3, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                Portfolio Value
              </Typography>
            </Box>
            <Typography variant="h5" component="div">
              $1,250,000<span style={{ fontSize: "12px", marginLeft:"5px" }}><span color="success">+8.2%</span> from last year</span>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "20%" }}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 3, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                Net Income
              </Typography>
              <Box>
                <FormControl sx={{ minWidth: 90, height: 32, fontSize: "12px" }} size="small">
                  <Select
                    id="demo-select-small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    displayEmpty
                    sx={{
                      height: 32,
                      ".MuiSelect-select": {
                        padding: "4px 10px", // Adjust padding to fit within 32px height
                        minHeight: "unset",
                        fontSize: "12px"
                      },
                    }}
                  >
                    <MenuItem value={10}>Prev Month</MenuItem>
                    <MenuItem value={20}>Prev Year</MenuItem>
                  </Select>
                </FormControl>

              </Box>
            </Box>
            <Typography variant="h5" component="div">
              $10,000<span style={{ fontSize: "12px", marginLeft:"5px" }}><span color="success">+8.2%</span> from last year</span>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "20%" }}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", fontSize: "12px", mb: 3, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                ROI
              </Typography>
              <Box>
                <FormControl sx={{ minWidth: 90, height: 32 }} size="small">
                  <Select
                    id="demo-select-small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    displayEmpty
                    sx={{
                      height: 32,
                      ".MuiSelect-select": {
                        padding: "4px 10px", // Adjust padding to fit within 32px height
                        minHeight: "unset",
                        fontSize: "12px"
                      },
                    }}
                  >
                    <MenuItem value={10}>1 year</MenuItem>
                    <MenuItem value={20}>5 Year</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Typography variant="h5" component="div">
              12%<span style={{ fontSize: "12px", marginLeft:"5px" }}>Approx per year</span>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "35%"}}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 1, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                Risk Assessment
              </Typography>
            </Box>
            <Box className="card-sm">
              <Box className="card-sm-block">
                <Typography className="text"><span style={{backgroundColor:"red"}}></span>Low<ArrowOutwardRoundedIcon/></Typography>
                <Typography className="sub-text">35 Assets</Typography>
              </Box>
              <Box className="card-sm-block">
                <Typography className="text"><span style={{backgroundColor:"red"}}></span>Low<ArrowOutwardRoundedIcon/></Typography>
                <Typography className="sub-text">35 Assets</Typography>
              </Box>
              <Box className="card-sm-block">
                <Typography className="text"><span style={{backgroundColor:"red"}}></span>Low<ArrowOutwardRoundedIcon/></Typography>
                <Typography className="sub-text">35 Assets</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box className="cards" sx={{ display: "flex", gap: 3, mb: 3 }}>
        <Card sx={{ width: "25%" }}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 3, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                Asset Allocation
              </Typography>
            </Box>
            <Box>
               <PieChartWithCenterLabel/>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: "42%" }}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 3, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
                 Top Performing Assets
              </Typography>
         
            </Box>
            <Grid isPagination={false} height="120" columns={columns1} rows={rows1} />
          </CardContent>
        </Card>
        <Card sx={{ width: "35%"}}>
          <CardContent>
            <Box sx={{ display: "flex", height: "32px", mb: 1, justifyContent: "space-between", alignItems: "center" }}>
              <Typography gutterBottom sx={{ fontSize: 16, mb: 0 }}>
              Expense Breakdown
              </Typography>
              <Box>
                <FormControl sx={{ minWidth: 90, height: 32, fontSize: "12px" }} size="small">
                  <Select
                    id="demo-select-small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    displayEmpty
                    sx={{
                      height: 32,
                      ".MuiSelect-select": {
                        padding: "4px 10px", // Adjust padding to fit within 32px height
                        minHeight: "unset",
                        fontSize: "12px"
                      },
                    }}
                  >
                    <MenuItem value={10}>Monthly</MenuItem>
                    <MenuItem value={20}>Yearly</MenuItem>
                  </Select>
                </FormControl>

              </Box>
            </Box>
            <BarLabel/>
          </CardContent>
        </Card>
      </Box>
      <Box><Grid isPagination={true} height="400" columns={columns} rows={rows} /></Box>
    </>
  )
}

export default Dashboard