import { Html } from "@react-three/drei"

export default function TriBtns({...props}) {
    return <>
        <group className='triButtons' position={[0.85,-0.1,0]}>

            <Html position={[1.2,1.3,0]} distanceFactor={85} center >
                <button className='btn' 
                    onClick={() => {
                        console.log(props)
                        return props.setText(props.randomize())
                    }}
                >
                    RANDOM </button>
            </Html>

            <Html position={[0.25,-0.65,0]} distanceFactor={85} center >
                <button className='btn' 
                    onClick={() => {
                        return props.setText(props.randomizeConsonant())
                    }}
                    
                >
                LETTER </button>
            </Html>

            <Html position={[2.15,-0.65,0]} distanceFactor={85} center >
                <button className='btn' 
                    onClick={() => {
                        return props.setText(props.randomizeVowel())
                    }}
                    
                >
                    VOWEL </button>
            </Html>

        </group>

    </>
}