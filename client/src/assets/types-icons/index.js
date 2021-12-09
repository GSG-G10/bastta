/* eslint-disable global-require */
export const elctronics = require('./elctronics.svg').default;
export const car = require('./car.svg').default;
export const house = require('./house.svg').default;
export const furniture = require('./furniture.svg').default;
export const service = require('./service.svg').default;
export const sport = require('./sports.svg').default;
export const appliances = require('./appliances.svg').default;

const types = [
  {
    title: 'الإلكترونيات',
    type: 'elctronics',
    icon: elctronics,
  },
  {
    title: 'المركبات',
    type: 'car',
    icon: car,
  },
  {
    title: 'العقارات',
    type: 'house',
    icon: house,
  },
  {
    title: 'الأثاث',
    type: 'furniture',
    icon: furniture,
  },
  {
    title: 'الخدمات',
    type: 'service',
    icon: service,
  },
  {
    title: 'الرياضة',
    type: 'sport',
    icon: sport,
  },
  {
    title: 'الأجهزة الكهربائية',
    type: 'appliances',
    icon: appliances,
  },
];
export default types;
