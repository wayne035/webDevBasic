import { Articles } from "../data/cardData"

interface Props{
    lang: string,
    data: Articles[]
}

export default function Card({lang, data}: Props) {
  return (
    <section className={`box ${lang.toLocaleLowerCase()}`}>
      <h2 className="text-[35px]">{lang}</h2>
      {}
    </section>
  )
}
