
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack  alignItems="center">
      <Stack direction="row">
        <p>Get me a coffee! 🙃 ❤️</p>
      </Stack>
      <Stack direction="row" >
        <Chip label=" 0xf08629cEE9b31367bc268220C30730AC709AccD3 " color="primary" />
      </Stack>
    </Stack>
  );
}


