
const list = ['HTML','CSS','JavaScript']

export default function Header() {
  const scrollMove = (title: string)=>{
    const bodyHeight = document.body.scrollHeight
    if(title === 'HTML') window.scrollTo({top:0.17 * bodyHeight})
    if(title === 'CSS') window.scrollTo({top:0.41 * bodyHeight})
    if(title === 'JavaScript') window.scrollTo({top:0.66 * bodyHeight})
  }

  return (
    <header className='fixed w-full'>
      <ul className='flex justify-center text-[30px]'>
        {
          list.map(title =>(
          <li key={title} onClick={()=> scrollMove(title)}>
            {title}
          </li>
          ))
        }
      </ul>
    </header>
  )
}