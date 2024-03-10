export interface Articles{
  title: string,
  link: string
}

export interface Data{
  lang: string,
  articles: Articles[]
}

export const cardData:Data[] = [
  {
    lang: 'HTML',
    articles: [
      {title:'',link:''}
    ]
  },
  {
    lang: 'CSS',
    articles: [
      {title:'',link:''}
    ]
  },
  {
    lang: 'JavaScript',
    articles: [
      {title:'',link:''}
    ]
  },
]