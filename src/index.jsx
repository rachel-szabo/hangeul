import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const myFunction = () => {
    console.log('clicked')
}

root.render(
    <Canvas
        camera={ {
            fov: 80,
            near: 0.1,
            far: 250,
            position: [ 0, 0, 95 ]
        } }
    >
        <Experience />
    </Canvas>
)