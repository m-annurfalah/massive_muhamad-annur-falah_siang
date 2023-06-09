import '../App.css'

const Galeri = (props) => {
    return (
        <>
            <div className="w-full mb-4">
                <img src={props.src} alt="Galeri" className="w-full"/>
            </div>
        </>
    )
}

export default Galeri