import * as muiModules from '../../mui-modules';

import style from './style';

const SectionList = () => (
  <muiModules.Box sx={style.body}>
    <muiModules.Link sx={style.link} href="/product/search/الإلكترونيات">
      الإلكترونيات
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/العقارات">
      العقارات
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/المركبات">
      المركبات
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/الأثاث">
      الأثاث
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/الخدمات">
      الخدمات
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/الرياضة">
      الرياضة
    </muiModules.Link>
    <muiModules.Link sx={style.link} href="/product/search/الأجهزة">
      الأجهزة
    </muiModules.Link>
  </muiModules.Box>
);

export default SectionList;
