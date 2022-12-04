import images from "src/Importer/Importer";
export interface DataModel {
  id: number;
  name: string;
  category: string;
  url: string;
  desc: string;
  color?: string;
}
export const data: DataModel[] = [
  {
    id: 1,
    name: 'Donny Jiang',
    category: 'Architecture',
    desc: 'Minneapolis, MN, USA',
    color: '#5f9199',
    url:`${images['Blog/1.png']}`,
  },
  {
    id: 2,
    name: 'Francesco Ungaro',
    category: 'Architecture',
    desc: 'Mudec museum of culture, Milano, Italy',
    color: '#426555',
    url:`${images['Blog/2.png']}`,
  },
  {
    id: 3,
    name: 'Dorien Monnens',
    category: 'Architecture',
    desc: 'Glasgow botanical garden',
    color: '#a2b3b0',
    url:`${images['Blog/3.png']}`,
  },
  {
    id: 4,
    name: 'Mehmet Turgut Kirkgoz',
    category: 'Architecture',
    desc: 'Vatican Museums, Vatikan',
    color: '#0d3d45',
    url:`${images['Blog/4.png']}`,
  },
  {
    id: 5,
    name: 'Clarisse Croset',
    category: 'Architecture',
    desc: 'Paris, France',
    color: '#807f7e',
    url:`${images['Blog/5.png']}`,
  },
  {
    id: 6,
    name: 'Dylan Leagh',
    category: 'Architecture',
    desc: 'Amsterdam',
    color: '#8da2a9',
    url:`${images['Blog/6.png']}`,
  },
  {
    id: 7,
    name: 'Thomas de LUZE',
    category: 'Architecture',
    desc: 'Slovénie, Slovénie',
    color: '#48737d',
    url:`${images['Teammate/1.png']}`,
  },
  {
    id: 8,
    name: 'Nick Samoylov',
    category: 'Architecture',
    color: '#d89e80',
    desc:
      'Dortheavej Residence BIG, Dortheavej, Copenhagen Municipality, Denmark',
    url:`${images['Teammate/2.png']}`,
  },
  {
    id: 9,
    name: 'Max Titov',
    category: 'Architecture',
    desc: 'Moscow City',
    color: '#6b0200',
    url:`${images['Teammate/3.png']}`,
  },
  {
    id: 10,
    name: 'Duncan Meyer',
    desc: 'Hillcrest, South Africa',
    category: 'Architecture',
    color: '#858585',
    url:`${images['Teammate/4.png']}`,
  },
  {
    id: 11,
    name: 'Andrea Ferrario',
    category: 'Architecture',
    desc: 'milano, Italia',
    color: '#3d656f',
    url:`${images['User/1.png']}`,
  },
  {
    id: 12,
    name: 'Franck V',
    desc: 'Intricate',
    category: 'Architecture',
    color: '#354578',
    url:`${images['User/2.png']}`,
  },
  {
    id: 13,
    name: 'Eugene Lim',
    category: 'Architecture',
    desc: 'Hong Kong Island, Hong Kong',
    color: '#303030',
    url:`${images['User/3.png']}`,
  },

  {
    id: 14,
    name: 'Zheni Yaneva',
    category: 'Architecture',
    desc: 'Canary Wharf, London, UK',
    color: '#5996ea',
    url:`${images['User/2.png']}`,
  },
  {
    id: 15,
    name: 'Jonathan Kemper',
    category: 'Architecture',
    desc: 'Bonn, Deutschland',
    color: '#736558',
    url:`${images['User/2.png']}`,
  },
];
