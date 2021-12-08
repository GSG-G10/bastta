import * as muiModules from '../../mui-modules';

import style from './style';

const links = [
  'الإلكترونيات',
  'العقارات',
  'المركبات',
  'الأثاث',
  'الخدمات',
  'الرياضة',
  'الأجهزة',
];

const SectionList = () => (
  <muiModules.Box sx={style.body}>
    {links.map((e) => (
      <muiModules.Link key={e} sx={style.link} href={`/product/${e}`}>
        {e}
      </muiModules.Link>
    ))}
  </muiModules.Box>
);

export default SectionList;
