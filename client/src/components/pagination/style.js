const styles = {

  containerClassified: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto',
  },

  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem',
    background: '#ffffff',
    border: '1px solid rgba(169, 175, 176, 05)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    textDecoration: 'none',
    height: '200px',
  },

  right: {
    width: '25%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  left: {
    width: '70%',
    marginRight: '1.3rem',
  },

  classImg: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: '.6rem',
    borderBottomRightRadius: '.5rem',
    objectFit: 'fill',
  },

  favourite: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  nameClassified: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  subnameClassified: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '34px',
    textAlign: 'right',
    color: '#a9afb0',
  },

  titleClassified: {
    fontFamily: 'Cairo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    color: '#333333',
    marginBottom: '0',
    marginTop: '2px',
  },

  moreDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'space-between',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '.6rem',
  },

  iconCity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '20px',
    textAlign: 'right',
    color: '#aeb0a9',
    margin: '0',
  },

  subCity: {
    color: '#1a6e9a',
    marginRight: '5px',
  },

  price: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.2rem',
    textAlign: 'right',
    color: '#a9afb0',
    margin: '0',
  },

  subPrice: {
    color: ' #1a6e9a',
    marginRight: '.3rem',
  },

  titleDecription: {
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '150%',
    textAlign: 'right',
    color: '#333333',
  },

  sectionBtnClassified: {
    width: '350px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginBottom: '.6rem',
  },

  sectionClassifiedButton: {
    display: 'flex',
    width: '160px',
    height: '38px',
    textAlign: 'center',
    borderRadius: '5px',
    fontSize: '18px',
    lineHeight: '150%',
    alignItems: 'center',
    cursor: 'pointer',
    border: '10px solid red',
  },

  btnChatClassified: {
    backgroundColor: '#1a6e9a',
    color: '#ffffff',
    border: '1px solid #ffffff',
    // border: '10px solid red',

  },

  btnCallClassified: {
    backgroundColor: '#ffffff',
    color: '#1a6e9a',
    border: '1px solid #1a6e9a',
  },

  btnLikeClassified: {
    border: 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
  },
};

export default styles;
