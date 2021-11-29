const card = {
  margin: '2rem',
  width: '200px',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  color: 'white',
  backgroundColor: 'primary.main',
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },

};
const confirmRequest = {
  hover: {
    redButtonHover: {
      color: 'white',
      '&:hover': { backgroundColor: 'red' },
      cursor: 'pointer',
    },
    greenButtonHover: {
      color: 'white',
      '&:hover': { backgroundColor: 'green' },
      cursor: 'pointer',
    },
  },
};
const imageModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 800,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

};
const Table = {

};
export {
  card,
  confirmRequest,
  imageModal,
  Table,
};
