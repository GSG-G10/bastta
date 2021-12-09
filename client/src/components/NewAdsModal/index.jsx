import { useState } from 'react';

import * as muiModules from '../../mui-modules';

import NewAdsForm from './NewAdsForm';
import AdsType from './AdsType';

import * as style from './style';

const NewAdsModal = () => {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [category, setCategory] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <muiModules.Button variant="outlined" onClick={handleOpen}>
        أضف إعلان جديد
      </muiModules.Button>
      <muiModules.Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <muiModules.Box sx={style.modal.body}>

          {openForm ? (
            <NewAdsForm
              setOpenForm={setOpenForm}
              category={category}
              setOpen={setOpen}
            />
          ) : (
            <AdsType setOpenForm={setOpenForm} setCategory={setCategory} />
          )}
        </muiModules.Box>
      </muiModules.Modal>
    </div>
  );
};
export default NewAdsModal;
