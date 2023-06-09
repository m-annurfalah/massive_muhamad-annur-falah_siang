import { useState } from 'react'
import '../App.css'

import Name from './Name'
import Title from './Title'
import Text from './Text'
import Countdown from './Countdown'
import Card from './Card'
import Galeri from './Galeri'
import Navbar from './Navbar'

import foto from '../assets/foto.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-one">
        <div>
        {/* Beranda */}
        <div id="beranda">
            {/* Foto Pasangan */}
            <div style={{backgroundImage: `url(${foto})`}
            } className="relative bg-cover h-96">
                <div className="bg-gradient-to-b from-transparent to-gradien h-full">                
                    <div className="absolute inset-x-28 sm:inset-x-40 md:inset-x-60 lg:inset-x-96 -bottom-0.5 pt-4 pb-2 bg-one rounded-t-3xl border-white">
                        <Title>Pernikahan</Title>
                    </div>
                </div>
            </div>

            <div className="px-14 md:px-28">
                {/* Nama Pasangan */}
                <div className="py-10">
                    <Name>Fulan & Fulana</Name>
                    <br />
                    <Title>12 Desember 2025</Title>
                </div>
                <hr className="bg-black"/>

                <div className="py-14">
                    <div>
                        <Title>Assalamu'alaikum Warahmatullahi Wabarakatuh</Title>
                        <br />
                        <Text>Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara kami untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah, dan warahmah.</Text>
                    </div>
                    
                    {/* Pasangan */}
                    <div id="pasangan" className="sm:flex items-center justify-center">
                        {/* Pria */}
                        <div className="my-10">
                            <img src={foto} alt="Mempelai Pria" className="w-full h-full rounded-full mb-4 px-12"/>
                            <div>
                                <Name>Fulan</Name>
                                <Text>Putra Bungsu dari<br />Bpk. Agus Solahudin & Ibu Yani Suryani</Text>
                            </div>
                        </div>

                        <Title>Dengan</Title>

                        {/* Wanita */}
                        <div className="my-10">
                            <img src={foto} alt="Mempelai Wanita" className="w-full h-full rounded-full mb-4 px-12"/>
                            <div>
                                <Name>Fulana</Name>
                                <Text>Putra Bungsu  dari<br />Bpk. Jony Suhendar & Ibu Luyu Ramindu</Text>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-black"/>

                    {/* Acara */}
                    <div id="acara" className="py-14">
                        <Text>Rangkaian Acara akan Diselenggarakan</Text>
                        <br />

                        <Name>Kamis,<br />12 Desember 2025</Name>
                        <br />

                        <Text>Hitung Mundur Acara</Text>
                        <Countdown />
                        <br /> <br />

                        <div className="lg:flex justify-bentween gap-10">
                            <Card name="Akad Nikah" date="Kamis, 12 Desember 2025" time="09.00" address="Kp. Indraloka RT 02 RW 18 Desa Loka Karya, Kec. Karya Karsa, Kab. Anyar"/>
                            <Card name="Resepsi Nikah" date="Kamis, 12 Desember 2025" time="10.00 WIB s/d 17.00" address="Kp. Indraloka RT 02 RW 18 Desa Loka Karya, Kec. Karya Karsa, Kab. Anyar"/>
                        </div>
                    </div>
                    <hr className="bg-black"/>

                    <div className="py-14">
                        <Text>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                        <br /> <br />
                        (Q.S. Ar-Ruum: 21)
                        </Text>
                    </div>
                    <hr className="bg-black"/>

                    {/* Galeri */}
                    <div id="galeri" className="galeri py-14">
                        <Name>Galeri</Name>
                        <br />

                        <div className="sm:flex justify-between gap-10">
                            <Galeri src={foto} />
                            <Galeri src={foto} />
                            <Galeri src={foto} />
                        </div>
                    </div>
                </div>
            </div>

            {/* End */}
            <div className="relative">
                <div className="absolute inset-x-20 sm:inset-x-40 md:inset-x-64 lg:inset-x-96 -top-12 pt-4 pb-2 bg-white rounded-t-3xl border-white">
                    <Title>Kami yang Berbahagia</Title>
                </div>
                <div className="bg-white py-10">
                    <div className="md:flex justify-center gap-32 mb-6">
                        <div className="pb-8">
                            <Title>Keluarga Besar</Title>
                            <Name>Fulan</Name>
                            <Text>Bpk. Agus Solahudin & Ibu Yani Suryani</Text>
                        </div>
                        <div className="pb-8">
                            <Title>Keluarga Besar</Title>
                            <Name>Fulana</Name>
                            <Text>Bpk. Joni Suhendar & Ibu Luyu Ramiyu</Text>
                        </div>
                    </div>
                    <div className="pb-8">
                        <Text>Atas perhatian dan pengertiannya, kami ucapkan terima kasih.</Text>
                    </div>
                </div>
            </div>
            
            <div className="py-10">
                <p>Template dibuat oleh <strong>Muhamad Annur Falah</strong></p>
            </div>
        </div>

        <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
