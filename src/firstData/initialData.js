
export default function getRandomData() {
  const initialEvents = [
    {
      name: "Age of Apocalypse",
      id: 227,
      img: "https://cdn.comicsverse.com/wp-content/uploads/sites/6/2016/04/episode_71_age_of_apocalypse.jpg"
    },
    {
      name: "Age of Ultron",
      id: 314,
      img: "https://www.herocollector.com/uploads/media/Age-of-Ultron.jpg"
    },
    {
      name: "Civil War",
      id: 238,
      img: "http://cdn.collider.com/wp-content/uploads/Civil-War-1.jpg"
    },
    {
      name: "Infinity War",
      id: 29,
      img: "https://www.wallpaperbetter.com/wallpaper/253/166/509/the-infinity-war-x-men-avengers-hd-1080P-wallpaper-middle-size.jpg"
    },
    {
      name: "Infinity Gauntlet",
      id: 253,
      img: "https://img.europapress.es/fotoweb/fotonoticia_20180427114301_640.jpg"
    },
    {
      name: "Kraven's last hunt",
      id: 258,
      img: "https://cafart.r.worldssl.net/images/Category_13715/subcat_28329/DTKLH.jpg"
    },
    {
      name: "Secret Invasion",
      id: 269,
      img: "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/comics.batanga.com/files/Cinco-personajes-que-queremos-ver-en-Agents-of-SHIELD-5.jpg"
    },
    {
      name: "Secret War",
      id: 270,
      img: "https://pixel.nymag.com/imgs/daily/vulture/2016/01/13/13-secret-wars-003.w1200.h630.jpg"
    },
    {
      name: "Spider-verse",
      id: 321,
      img: "https://img5.goodfon.com/wallpaper/nbig/2/d7/chelovek-pauk-cherez-vselennye-spider-man-into-the-spider--1.jpg"
    },
    {
      name: "World War Hulk",
      id: 277,
      img: "https://i.ytimg.com/vi/ACCHXSvGyXc/maxresdefault.jpg"
    },
    {
      name: "Planet Hulk",
      id: 212,
      img: "https://media.comicbook.com/2018/03/planet-hulk-event-1095070.jpeg"
    },
    {
      name: "Avengers vs. X-Men",
      id: 310,
      img: "https://cdn-3.expansion.mx/dims4/default/babecb4/2147483647/strip/true/crop/800x450+0+0/resize/800x450!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F0b%2Fdf%2F4d81e76b40b1a4783f0868b83deb%2Favengers-vs-xmen-pelicula-1.jpg"
    },
    {
      name: "Marvel Now",
      id: 315,
      img: "https://cdn2us.denofgeek.com/sites/denofgeekus/files/2448775-marvelnow.jpeg"
    },
    {
      name: "Annihilation",
      id: 229,
      img: "https://i.annihil.us/u/prod/marvel/i/mg/3/80/51b61244955fe/background.jpg"
    },
  ]
  const initialCharacters = [
  {
    name: "Thor",
      id: 1009664,
      img: "https://www.zonanegativa.com/imagenes/2014/07/thor-coipel.jpg"
    },
    {
      name: "Iron Man",
      id: 1009368,
      img: "https://wallup.net/wp-content/uploads/2018/03/19/575917-Iron_Man-comics-Marvel_Comics.jpg"
    },
    {
      name: "Spider Man",
      id: 1009610,
      img: "https://images.alphacoders.com/260/thumb-1920-260933.jpg"
    },
    {
      name: "War Machine",
      id: 1010991,
      img: "https://3.bp.blogspot.com/-ihMPJg4SNjE/XF08dJwT2LI/AAAAAAAAFwM/4khgLCVwVEclVp5jPpSdHEDpyGit0BCjQCHMYCw/s1600/war-machine-wallpaper-and-background-image-1440x991-id669844.jpg"
    },
    {
      name: "Rocket Raccoon",
      id: 1010744,
      img: "https://archive.nerdist.com/wp-content/uploads/2014/07/rocket-raccoon-cover-hdr.jpg"
    },
    {
      name: "Hulk",
      id: 1009351,
      img: "https://cdn.pixabay.com/photo/2015/03/11/01/33/hulk-667988__340.jpg"
    },
    {
      name: "Star-Lord",
      id: 1010733,
      img: "https://assets1.ignimgs.com/2019/01/23/star-lord-1548274423078.jpg"
    },
    {
      name: "Captain America",
      id: 1009220,
      img: "https://wallpaperaccess.com/full/6731.jpg"
    },
    {
      name: "Adam Warlock",
      id: 1010354,
      img: "https://mondrian.mashable.com/2018%252F05%252F08%252Fbe%252F6ede90415e0f4ec0a809a2f6947e270f.31214.jpg%252F1200x630.jpg"
    },
    {
      name: "Wolverine",
      id: 1009718,
      img: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/06/return_of_wolverine_hero.jpg"
    },
    {
      name: "Vision",
      id: 1009697,
      img: "https://mbd-world.de/wordpress/wp-content/uploads/2018/04/Vision-in-Marvel-Comics-678x381.jpg"
    },
    {
      name: "Daredevil",
      id: 1009262,
      img: "https://media.comicbook.com/2015/09/ddslide-149700.png"
    },
    {
      name: "Thanos",
      id: 1009652,
      img: "https://wallpaperaccess.com/full/447660.jpg"
    },
    {
      name: "Wasp",
      id: 1009707,
      img: "https://womenwriteaboutcomics.com/wp-content/uploads/2017/09/Unstoppable_Wasp_Vol_1_1.jpg"
    }
  ]
  //take a copy of the characters list
  let characters = [];
  initialCharacters.forEach(e => {
    characters.push(e);
  });   
  //take a copy of the events list
  let events = [];
  initialEvents.forEach(e => {
    events.push(e);
  });
  //create an empty array
  const randomData = {
    randomCharacters: {
      name: "characters",
      data: []
    },
    randomEvents: {
      name: "events",
      data: []
    }
  };
  for (let i = 0; i < 3; i++) {
    const chosen = Math.floor(Math.random() * characters.length);
    if (characters[chosen] === undefined) {
      i--;      
    }else{
      randomData.randomCharacters.data.push(characters[chosen]);
      delete characters[chosen];
    }
    if (events[chosen] === undefined) {
      i--;      
    }else{
      randomData.randomEvents.data.push(events[chosen]);
      delete events[chosen];
    }

  }
  return randomData;

}
