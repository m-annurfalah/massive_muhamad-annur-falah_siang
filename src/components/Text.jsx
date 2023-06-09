import '../App.css'

const Text = (props) => {
  return (
    <>
        <p className="text-xs">{props.children}</p>
    </>
  )
}

export default Text
