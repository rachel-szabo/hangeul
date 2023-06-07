import { Center, Text3D, Html, Float } from '@react-three/drei'
import { useState } from 'react'
import TriBtns from './TriBtns'

export default function Hangeul() {
    let yPos = -0.16
    const [fontSize, setFontSize] = useState(() => { return 0.7})
    const [text, setText] = useState(() => { return '    시작'})
    // text.style.textAlign = 'center'

    const textArr = ['   세상에', '      와', '   아이고', '      헐', '오마이갓', '    와우', '   멋있다', '      핵' ]
    // const textArr = ['세상에', '와', '아이고', '헐', '오마이갓', '와우', '멋있다', '핵' ]
    const consonantArr = ['      ㄱ','      ㄴ', '      ㄷ', '      ㄹ', '      ㅁ', '      ㅂ', '      ㅅ', '      ㅇ', '      ㅈ', '      ㅊ', '      ㅋ', '      ㅌ', '      ㅍ', '      ㅎ']
    const vowelArr = ['      ㅗ','      ㅏ', '      ㅜ', '      ㅓ', '      ㅐ', '      ㅔ', '      ㅣ', '      ㅡ', '      ㅛ', '      ㅑ', '      ㅠ', '      ㅕ', '      ㅒ', '      ㅖ']


    //FIRST EXAMPLE ARR (DIFT 'WOWS')
    const randomize = function() {
        let randomNum = Math.floor(Math.random() * 8)

        if(text == textArr[randomNum]) {
            randomNum = Math.floor(Math.random() * 8)
        }
        if(textArr[randomNum].length < 5) {
            setFontSize(0.5)
            yPos = 0.16
            return '    오마이갓'
        }

        setFontSize(0.7)
        yPos = -0.16 
        return textArr[randomNum]
    }

    //CONSONANTS
    const randomizeConsonant = function() {
        let randomNum = Math.floor(Math.random() * 14)
        if(text == consonantArr[randomNum]) {
            randomNum = Math.floor(Math.random() * 14)
        }
        setFontSize(0.7)
        yPos = -0.16 
        return consonantArr[randomNum]
    }

    //VOWELS
    const randomizeVowel = function() {
        let randomNum = Math.floor(Math.random() * 14)
        if(text == vowelArr[randomNum]) {
            randomNum = Math.floor(Math.random() * 14)
        }
        setFontSize(0.7)
        yPos = -0.16 
        return vowelArr[randomNum]
    }

    // const selectArr = function() {

    // }

    //fonts:
    const fonts = [
        '/fonts/3D/NotoSerifKR.json',
        '/fonts/3D/NanumSquareRound.json',
        '/fonts/3D/NanumGothic.json',
        '/fonts/3D/MaruBuri.json',
        '/fonts/3D/HimNaeRaNeunMarBoDan.json',
        '/fonts/3D/GaRamYeonGgoc.json' //fave so far (handwritten vibe)
    ]

    return <>
    <group position={[-2,3.5,0]} scale={30}>
        <Center center> 

            {/* MAIN TEXT DISPLAY */}
            
                <Text3D
                    position={[-0.05, yPos, 0]} 
                    font={fonts[2]} 
                    size={fontSize} 
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    boundingBox

                    // onClick={() => {
                    //     return setText(randomize())
                    // }}
                >
                        {text}
                    <meshStandardMaterial color={"#9fbdf0"}/>
                </Text3D>

            {/* BUTTON ELEMENTS */}
            <TriBtns textArr={textArr} consonantArr={consonantArr} vowelArr={vowelArr} text={text} setText={setText} 
                     randomize={randomize} randomizeConsonant={randomizeConsonant} randomizeVowel={randomizeVowel}/>   
        </Center>

    </group>
        
    </>
    
}