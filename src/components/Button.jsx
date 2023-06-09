import '../App.css'

const Button = (props) => {
  return (
    <>
        <a href={props.link} className="text-xs font-inter font-semibold bg-white drop-shadow-lg py-3 px-8 rounded-full hover:bg-slate-100">{props.children}</a>
    </>
  )
}

export default Button
