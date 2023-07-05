import { Box, Typography } from "@mui/material";

export default function IndexLayout({
  children
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}