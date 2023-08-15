import React from 'react';


function importAll(r) {
  return r.keys().map(r);
}

const projects = {
//han d'anar per ordre cronològic
  "orbits": {
    title: "orbits",
    structure: "<p>{t('projects.orbits.content')}</p>",
    imgPath: "images/orbits",
    date: "8/2023",
    hashtags: ["react", "front-end"],
    links: {
      "web": "https://orbits-frontend.vercel.app/",
    },
    images: importAll(require.context(process.env.PUBLIC_URL + '/images/orbits', false, /\.(png|PNG|JPE?G|GIF|jpe?g|svg|gif)$/)),
  },
  "porfolio": {
    title: "porfolio",
    structure: "<p>{t('projects.porfolio.content')}</p>",
    imgPath: "images/porfolio",
    date: "1/2023 - 9/2023",
    hashtags: ["react", "responsive", "UI", "figma"],
    links: {
      "github": "https://github.com/gabrielardevol/portfolio-3",
      "figma": "https://www.figma.com/file/ByAFpzhCYu5O2t5gyS99a2/portfolio---march-2023"
    },
    images: importAll(require.context(process.env.PUBLIC_URL + '/images/orbits', false, /\.(png|PNG|JPE?G|GIF|jpe?g|svg|gif)$/)),
  },
  "esclat": {
    title: "esclat",
    structure: "<p>{t('projects.esclat.content')}</p>",
    imgPath: "images/esclat",
    date: "5/2023",
    hashtags: ["UI", "javascript"],
    links: {
      "web": "https://associacioesclat.com/edc.html",
      "github": "https://github.com/gabrielardevol/esclat"
    },
    images: importAll(require.context(process.env.PUBLIC_URL + '/images/orbits', false, /\.(png|PNG|JPE?G|GIF|jpe?g|svg|gif)$/)),
  },
  "celler": {
    title: "celler",
    structure: "<p>{t('projects.celler.content')}</p>",
    imgPath: "images/celler",
    date: "1/2023",
    hashtags: ["ruby", "rails"],
    links: {
      "web": "https://cellerardevol.herokuapp.com/",
      "github": "https://github.com/gabrielardevol/celler-ardevol"
    },
    images: importAll(require.context(process.env.PUBLIC_URL + '/images/orbits', false, /\.(png|PNG|JPE?G|GIF|jpe?g|svg|gif)$/)),
  },
  "pigs": {
    title: "pigs",
    structure: "<p>{t('projects.pigs.content')}</p>",
    imgPath: "images/pigs",
    date: "12/2022",
    hashtags: ["ruby", "OOP"],
    links: {
      "gitHub": "https://github.com/gabrielardevol/els-tres-porquets"
    },
    images: importAll(require.context(process.env.PUBLIC_URL + '/images/orbits', false, /\.(png|PNG|JPE?G|GIF|jpe?g|svg|gif)$/)),
  },
}

export default projects
