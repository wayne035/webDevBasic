import Header from "./components/Header"
import Card from "./components/Card"
import { cardData } from "./data/cardData"

export default function App() {
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