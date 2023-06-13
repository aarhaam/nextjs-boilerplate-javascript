import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { Button } from '@mui/material';

export default function Index() {
  return (
    <div>
      <h1 className=' bg-slate-100 p-2'>Hello World</h1>
      <Button sx={{textTransform: 'capitalize'}} variant='contained' disableElevation>Example Button</Button>
    </div>
  );
}
