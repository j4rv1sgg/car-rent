import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='border-b-4'>
     <nav>
        <ul className='flex justify-center gap-5'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
