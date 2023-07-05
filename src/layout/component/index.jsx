import { Box } from "@mui/material";

export default function ComponentLayout({children}){
  return (
    <Box sx={{padding: 2}}>
      <Box>Title Page</Box>
      {children}
    </Box>
  )
}