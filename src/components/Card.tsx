import { Articles } from "../data/cardData"

interface Props{
    lang: string,
    data: Articles[]
}

export default function Card({lang, data}: Props) {
  return (
    <section className={`box ${lang.toLocaleLowerCase()}`}>
      <h2>{lang.replace('-',' / ')}</h2>
      <article id={`${lang.toLocaleLowerCase()}`} 
               className="opacity-0 overflow-auto h-[90%] border-2 rounded-md"
      >
        {
          data.map(article=>(
            <a key={article.title} href={article.link} target="_black">
              <span style={{background: article.color}} className="type">
                {article.type}
              </span>
              <h3>{article.title}</h3>
            </a>
          ))
        }
      </article>
    </section>
  )
}