
const list = ['HTML-CSS','JavaScript','Python','Video']

export default function Header() {
  const scrollMove = (title: string)=>{
    const bodyHeight = document.body.scrollHeight
    if(title === 'HTML-CSS') window.scrollTo({top:0.132 * bodyHeight})
    if(title === 'JavaScript') window.scrollTo({top:0.333 * bodyHeight})
    if(title === 'Python') window.scrollTo({top:0.536 * bodyHeight})
    if(title === 'Video') window.scrollTo({top:0.735 * bodyHeight})
  }

  return (
    <header className='fixed w-full'>
      <ul className='flex justify-center text-[20px] md:text-[30px]'>
        {
          list.map(title =>(
          <li key={title} onClick={()=> scrollMove(title)}>
            {title.replace('-',' / ')}
          </li>
          ))
        }
      </ul>
    </header>
  )
}