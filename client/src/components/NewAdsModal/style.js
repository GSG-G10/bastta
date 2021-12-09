/* eslint-disable import/prefer-default-export */

const modal = {
  body: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', md: '75%', lg: '50%' },
    height: '80vh',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 2,
    overflowY: 'auto',
  },
};

const adsType = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsBox: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    mb: '0.5rem',
  },
  subtitle: {
    mb: '1rem',
  },
  item: {
    p: 1,
    m: 4,
    width: '160px',
    height: '160px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '12px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all .4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  itemTitle: {},
  itemIcon: {
    width: '60%',
    height: '60%',
  },
};

const logoBox = {
  width: 'fit-content',
  margin: 'auto',
};
const form = {
  body: {
    width: {
      xs: '95%',
      sm: '75%',
      md: '55%',
      lg: '40%',
    },
    margin: 'auto',
    mb: 5,
  },
  name: {
    width: '100%',
  },
  nameInput: {
    width: '100%',
  },
  priceBox: {
    width: '100%',
  },
  priceInput: {
    width: '100%',
  },
  submitBtn: {
    float: 'left',
  },
};
export {
  modal, adsType, logoBox, form,
};
