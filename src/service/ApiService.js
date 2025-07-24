import axios from "axios";

const apiChuck="https://api.chucknorris.io/jokes/"
const randomChuck="https://api.chucknorris.io/jokes/random?category="

export const getCategories=(setdata)=>{
  axios.get(apiChuck+"categories")
  .then(res=>{
    setdata(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

export const getRandomsJokes=(setdata,categorie)=>{
  axios.get(randomChuck+categorie)
  .then(res=>{
    setdata(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

export const listLaungt=[
    {
      "nombre":"bobesponja",
      "audio":"./audio/bobEsponja.mp3",
      "imagen":"./risas/bobEsponjaGif.gif"
    },
    {
      "nombre":"chucky",
      "audio":"./audio/chucky.mp3",
      "imagen":"./risas/chuckyGif.gif"
    },
    {
      "nombre":"calamardo",
      "audio":"./audio/calamardo.mp3",
      "imagen":"./risas/calamardoGif.gif"
    },
    {
      "nombre":"goofy",
      "audio":"./audio/goofy.mp3",
      "imagen":"./risas/goofyGif.gif"
    },
    {
      "nombre":"minion",
      "audio":"./audio/minions.mp3",
      "imagen":"./risas/minionGif.gif"
    },
    {
      "nombre":"thriller",
      "audio":"./audio/thriller.mp3",
      "imagen":"./risas/macabronGif.gif"
    },
  ]