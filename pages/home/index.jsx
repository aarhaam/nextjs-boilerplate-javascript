import { Box, Button, Typography } from "@mui/material";
import ComponentLayout from "../../src/layout/component";
import { useRouter } from "next/router";

function Home(){

  const router = useRouter()

  return (
    <Box>
      <Typography>Home Page</Typography>
      <Button onClick={() => router.push('/another')}>Click</Button>
    </Box>
  )
}

Home.getLayout = (page) => {
  return <ComponentLayout>{page}</ComponentLayout>
};

export default Home;