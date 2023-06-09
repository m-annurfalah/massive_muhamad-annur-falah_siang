import '../App.css'

const Name = (props) => {
    return (
        <>
            <h1 className="font-bellota font-bold text-2xl">{props.children}</h1>
        </>
    )
}

export default Name
