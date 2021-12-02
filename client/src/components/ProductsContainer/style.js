const cardsContainer = {
  border: '1px solid rgba(169,175,176,0.5)',
  padding: '25px',
  borderRadius: '20px',
  margin: '60px 0',
};
const containerTitle = {
  marginBottom: '40px',
};
const cardsBoxes = {
  display: 'grid',
  gridTemplateColumns: {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  },
  gap: '40px',
};
export { cardsContainer, containerTitle, cardsBoxes };
