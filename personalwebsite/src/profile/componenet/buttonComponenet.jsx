import "../profile.css"
const Button = ({ label }) =>{
    return (
        <div>
            <button className="nav-btn "><span>{ label }</span></button>
        </div>
    )
}

export default Button