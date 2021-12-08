/* eslint-disable import/prefer-default-export */
const modal = {
  body: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '80vh',
    bgcolor: 'background.paper',
    borderٌRadius: '16px',
    boxShadow: 24,
    p: 0,
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
    width: '150px',
    height: '150px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '4px',
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
export { modal, adsType };
