import { Float, PresentationControls } from '@react-three/drei'
import Background from './components/Background'
import Hangeul from './components/Hangeul'
import { handleClickIntro } from './components/handleEvents'

//Model imports
import { KoreanDrum } from './components/models/KoreanDrum'
import { KoreanLantern } from './components/models/KoreanLantern'
import Hwatu from './components/models/HwatuCard'
import Bbang from './components/models/FishBread'
import KoreanTotem from './components/models/KoreanTotem'

// import TickerTape from './components/TickerTape'

export default function Experience()
{
    handleClickIntro()

    return <>

        <PresentationControls 
            global
            rotation={[0,0,0]}
            polar={[-0.5,0.5]}
            azimuth={[-0.5, 0.5]}
            config={{mass: 2, tension: 300}}
            snap={{mass: 4, tension: 300}}
        >
            
            <Background />
        
            {/* MODELS */}

                {/* <KoreanDrum/> */}
                {/* <KoreanLantern/> */}
                {/* <Hwatu/>
                <Bbang scale={0.3}/> */}
                <group position={[0,0,-20]}>

                    <Float floatIntensity={15} rotationIntensity={0} speed={3}>
                        <KoreanTotem scale={1000} position={[-90,0,0]} rotation={[0,0.8,0.1]}/>
                        <KoreanTotem scale={1000} position={[90,0,0]} rotation={[0,-0.8,-0.1]}/>
                    </Float>
                    
                </group>



            {/* <TickerTape/> */}

            <directionalLight position={ [ 0, 3, 3 ] } intensity={ 0.8 } />
            <ambientLight intensity={ 0.3 } />

            <Hangeul/>
        
            </PresentationControls>


    </>
}