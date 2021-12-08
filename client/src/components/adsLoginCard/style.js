const cardsContainer = {
  width: '80%',
  height: {
    xs: 'auto',
    md: '200px',
  },
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  margin: 'auto',
  background: 'linear-gradient(90deg, #EEF4FC 36.05%, #1A6E9A 100%)',
};
const adsImg = {
  width: {
    xs: '100%',
    md: '50%',
  },
};
const leftBox = {
  height: '130px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};
const adsInfo = {
  fontFamily: 'Cairo',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  textAlign: 'center',
  color: '#000000',
};

const adsBtn = {
  width: '250px',
  height: '50.39px',
  border: 'none',
  background: '#1A6E9A',
  fontFamily: 'Cairo',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '24px',
  textAlign: 'center',
  color: '#FFFFFF',
  cursor: 'pointer',
};

export {
  cardsContainer, adsBtn, adsInfo, adsImg, leftBox,
};
