const showMessage = (message, style) => ({
  type: 'SHOW_MESSAGE',
  style,
  message,
});
export default showMessage;
