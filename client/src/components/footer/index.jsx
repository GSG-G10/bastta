import { Divider, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ItemOne, ItemTwo, ItemThree } from './items-component';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  color: 'white',
  width: '100%',
  height: '30vh',
  boxShadow: 'none',
}));

const Footer = () => (
  <div>
    <Stack
      direction="row"
      sx={{ backgroundColor: '#1a6e9a' }}
      divider={(
        <Divider
          orientation="vertical"
          color="white"
          sx={{ height: 200, marginTop: 5 }}
          flexItem
        />
    )}
    >
      <Item>
        <ItemOne />
      </Item>
      <Item>
        <ItemTwo />
      </Item>
      <Item>
        <ItemThree />
      </Item>
    </Stack>
  </div>
);
export default Footer;
