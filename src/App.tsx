import { useEffect} from "react";
import Header from "./components/Header"
import Card from "./components/Card"
import { cardData } from "./data/cardData"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=> {
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'body',
        start:'top',
        end:'+=500%',
        scrub:1
      }
    })

    tl.to('.html',{
      rotation: 0,
      width:'100%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    }).to('.html',{
      rotation:-10,
      width:200,
      height:200,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    }).to('.css',{
      rotation: 0,
      width:'100%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    },'-=1.1').to('.css',{
      rotation:-20,
      width:200,
      height:200,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    }).to('.javascript',{
      rotation: 0,
      width:'100%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    },'-=1.1').to('.javascript',{
      rotation:-30,
      width:200,
      height:200,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    })
  },[])

  return (
    <>
      <Header/>
      {
        cardData.map(({lang, articles})=> (
          <Card key={lang} lang={lang} data={articles}/>
        ))
      }
      <footer className="fixed bottom-0 w-full text-center text-[20px]">
        © 2024 All Rights Reserved. Designed By Wayne
      </footer>
    </>
  )
}