const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90%',
  },
  itemsBox: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
    width: '100%',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '45px',
    py: '25px',

  },
  item: {
    height: '100%',
    width: { xs: 'auto', md: 'calc(100%/3)' },
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  logo: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.5rem ',
  },
  logoImg: {
    filter: 'brightness(0) invert(1)',
    width: '100%',
  },
  social: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sections: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '22px',
  },
  par: {
    width: '33%',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'white',
  },
  header: {
    fontWeight: '700',
    mb: '18px',
  },
};

export default styles;
