
const list = ['HTML','CSS','JavaScript']

export default function Header() {
  
  return (
    <header className='fixed w-full'>
      <ul className='flex justify-center text-[30px]'>
        {
          list.map(title=> <li key={title}>{title}</li>)
        }
      </ul>
    </header>
  )
}