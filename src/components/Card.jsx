import '../App.css'
import Name from './Name'
import Title from './Title'
import Text from './Text'
import Button from './Button'

const Card = (props) => {
    return (
        <>
            <div className="pt-4 px-5 pb-8 mb-6 w-full bg-white rounded-2xl">
                <Name>{props.name}</Name>
                <br />
                <br />

                <div>
                    <div className="flex justify-center ">
                    <div className="mb-4 mx-10 h-full w-fit bg-one p-8 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>                
                    </div>
                    </div>
                    
                    <Title>{props.date}</Title>
                    <Text>{props.time} WIB</Text>
                </div>
                <br />

                <div>
                    <div className="flex justify-center px-14 ">
                    <div className="mb-4 mx-10 h-full w-fit bg-one p-8 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    </div>
                    <Title>Kediaman Mempelai Wanita</Title>
                    <Text>{props.address}</Text>
                </div>
                <br />
                <br />

                <Button>Lihat Lokasi via Google Map</Button>
            </div>
        </>
    )
}

export default Card