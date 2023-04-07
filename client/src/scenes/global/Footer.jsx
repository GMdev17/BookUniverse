import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            BookUniverse
          </Typography>
          <div>
            BookUniverse is an online bookstore with the best, top rated books
            in the market. Choose your book and get them delivered within a day.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            ABOUT US
          </Typography>
          <Typography mb="30px">
            <NavLink to="/careers">Careers</NavLink>
          </Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Service
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track your Order</Typography>
          <Typography mb="30px">Corporate</Typography>
          <Typography mb="30px">Return & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact us
          </Typography>
          <Typography mb="30px">Yakasaray District, 42</Typography>
          <Typography mb="30px">
            Email: bookuniverse.commerce@gmail.com
          </Typography>
          <Typography mb="30px">+998901234567</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
