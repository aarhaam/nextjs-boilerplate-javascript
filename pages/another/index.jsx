import { Box, Button, Typography } from "@mui/material";
import ComponentLayout from "../../src/layout/component";
import { useRouter } from "next/router";

function Another(){

  const router = useRouter()

  return (
    <Box>
      <Typography>Another Page</Typography>
      <Button onClick={() => router.push('/home')}>Click</Button>
    </Box>
  )
}

Another.getLayout = (page) => {
  return <ComponentLayout>{page}</ComponentLayout>
};

export default Another;