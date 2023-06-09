import '../App.css'
import Text from './Text'

const Countdown = () => {
    return (
        <>
            <div className="flex justify-center gap-4 px-4 mt-2">
                <div className="bg-slate-500 text-center text-white w-full h-full py-2 rounded-lg">
                    <h1 className="font-bold text-xl">OO</h1>
                    <Text>Hari</Text>
                </div>
                <div className="bg-slate-500 text-center text-white  w-full h-full py-2 rounded-lg">
                    <h1 className="font-bold text-xl">OO</h1>
                    <Text>Jam</Text>
                </div>
                <div className="bg-slate-500 text-center text-white  w-full h-full py-2 rounded-lg">
                    <h1 className="font-bold text-xl">OO</h1>
                    <Text>Menit</Text>
                </div>
                <div className="bg-slate-500 text-center text-white  w-full h-full py-2 rounded-lg">
                    <h1 className="font-bold text-xl">OO</h1>
                    <Text>Detik</Text>
                </div>
            </div>
        </>
    )
}

export default Countdown