const style = {
  body: {
    paddingTop: '0.5rem',
    display: 'flex',
    justifyContent: {
      xs: 'center',
      md: 'space-between',
    },
    alignItems: 'center',
    borderBottom: '1px solid #eef4fc',
    flexWrap: 'wrap',

  },
  userTools: {
    width: { xs: '75%', md: '22%' },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatBox: {
    cursor: 'pointer',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #1a6e9a',
  },
  dropMenu: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    color: '#1a6e9a',
  },
  logout: {
    color: '#1a6e9a',
    '&:hover': {
      color: 'red',
    },
  },
  searchBar: {
    btn: {
      height: '100%',
      borderRadius: '4px 0px 0px 4px',
    },
  },
};

export default style;
