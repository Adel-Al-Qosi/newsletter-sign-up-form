import { Link } from 'react-router-dom'
import mark from '../assets/images/icon-success.svg'
import '../assets/styles/Success.css'

function Success({info}) {
    console.log(info)
    return (
        <div className="success">
            <img src={mark} alt="mark" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{info.email}</span>. 
  Please open it and click the button inside to confirm your subscription.</p>
            <Link to='/'>Dismiss message</Link>
        </div>
    )
}

export default Success