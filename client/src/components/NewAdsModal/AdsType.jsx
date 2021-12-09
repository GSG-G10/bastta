/* eslint-disable react/prop-types */
import * as muiModules from '../../mui-modules';

import * as assets from '../../assets';

import * as style from './style';

const AdsType = ({ setOpenForm, setCategory }) => (
  <>
    <muiModules.Box sx={style.adsType.body}>
      <muiModules.Box>
        <img src={assets.logo} alt="logo" />
      </muiModules.Box>
      <muiModules.Typography variant="h4" sx={style.adsType.title}>
        مرحباً، ماذا ستنشر اليوم ؟
      </muiModules.Typography>
      <muiModules.Typography variant="h6">
        إختر القسم المناسب للإعلان الخاص بك
      </muiModules.Typography>
    </muiModules.Box>
    <muiModules.Box sx={style.adsType.itemsBox}>
      {assets.types.map((e) => (
        <muiModules.Box
          sx={style.adsType.item}
          key={e.type}
          onClick={() => {
            setCategory(e.type);
            setOpenForm((c) => !c);
          }}
        >
          <muiModules.Box sx={style.adsType.itemIcon}>
            <img style={style.adsType.img} src={e.icon} alt={e.title} />
          </muiModules.Box>
          <muiModules.Typography
            color="primary"
            variant="h6"
            sx={style.adsType.itemTitle}
          >
            {e.title}
          </muiModules.Typography>
        </muiModules.Box>
      ))}
    </muiModules.Box>
  </>
);

export default AdsType;
