import { useEffect } from "react";
import Header from "./components/Header"
import Card from "./components/Card"
import { cardData } from "./data/cardData"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(()=> {
  // hint  animation==============================
    ScrollTrigger.create({
      start: "top",
      onUpdate: ()=> {
        if(window.scrollY > 0) hint.pause(2,false)
        if(window.scrollY <= 0) hint.resume()
      },
    })

    const hint = gsap.to('.hint',{
      opacity: 1,
      duration: 1,
      repeat: -1, 
      yoyo:true,
      zIndex:99,
      ease: "sine.inOut",
    })
  // article  animation==============================
    let articleTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger:'body',
        start:'top',
        end:'+=700%',
        scrub:1
      }
    })
    articleTimeLine.to('#html-css',{opacity:1,duration:2})
    .to('#html-css',{opacity:0,duration:2},'+=1')
    .to('#javascript',{opacity:1,duration:2})
    .to('#javascript',{opacity:0,duration:2})
    .to('#python',{opacity:1,duration:2})
    .to('#python',{opacity:0,duration:2})
    .to('#video',{opacity:1,duration:2})
    .to('#video',{opacity:0,duration:2})
  // card  animation==================================
    let cardTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger:'body',
        start:'top',
        end:'+=700%',
        scrub:1
      }
    })
    cardTimeLine.to('.html-css',{
      rotation: 0,
      width:'80%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    }).to('.html-css',{
      rotation:-10,
      width:250,
      height:250,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    }).to('.javascript',{
      rotation: 0,
      width:'80%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    },'-=1.1').to('.javascript',{
      rotation:-20,
      width:250,
      height:250,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    }).to('.python',{
      rotation: 0,
      width:'80%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    },'-=1.1').to('.python',{
      rotation:-30,
      width:250,
      height:250,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    }).to('.video',{
      rotation: 0,
      width:'80%',
      height:'85vh',
      duration:2,
      top:'50%', left:'50%',
    },'-=1.1').to('.video',{
      rotation:-40,
      width:250,
      height:250,
      top:'50%', left:'50%',
      duration:2,
      zIndex:1
    })
  },[])

  return (
    <>
      <Header/>
      <span className="hint text-[30px] md:text-[60px]">
        請點上面連結或向下滾動
      </span>
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