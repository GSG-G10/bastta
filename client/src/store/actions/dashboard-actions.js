const chaneDate = (data) => ({
  type: 'CHANGE_DATA',
  payload: data,
});
const membersData = (data) => ({
  type: 'MEMBERS_DATA',
  payload: data,
});
const publishedData = (data) => ({
  type: 'PUBLISHED_DATA',
  payload: data,
});
const pendingData = (data) => ({
  type: 'PENDING_DATA',
  payload: data,
});
const viewTitle = (data) => ({
  type: 'TITLE',
  payload: data,
});
const viewData = (data) => ({
  type: 'VIEW_DATA',
  payload: data,
});
const deleteMemberRow = (id) => ({
  type: 'DELETE_MEMBER_ROW',
  payload: id,
});
const deleteProductRow = (id) => ({
  type: 'DELETE_PRODUCTS_ROW',
  payload: id,
});
const deletePendingRow = (id) => ({
  type: 'DELETE_PENDING_ROW',
  payload: id,
});

export {
  chaneDate,
  membersData,
  publishedData,
  pendingData,
  viewTitle,
  viewData,
  deleteMemberRow,
  deleteProductRow,
  deletePendingRow,
};
