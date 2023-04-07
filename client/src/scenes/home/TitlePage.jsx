import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { height } from '@mui/system';
import { shades } from '../../theme';
import image from '../../assets/logo.jpg';

const TitlePage = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className='home-container'>
      <Box
        mt="80px"
        display="flex"
        justifyContent="space-between"
        color={shades.primary[300]}
      >
        <img
          src={image}
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
        />
        <Box
          fontSize="24px"
          fontWeight="600"
          mb="15px"
          width="100%"
          justifyContent="center"
        >
          <div className="home-title-container">
            <h3 className="home-title">
              Explore the universe of books <br /> with us
            </h3>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TitlePage;
