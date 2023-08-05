import './App.css'
import {motion} from"framer-motion"
function App() {

  return (
    <>
    <div className="bg-indigo-700 h-screen w-screen">
        <motion.div className="bg-white h-20 w-20 absolute
        left-10 top-10 rounded-xl
        " 
        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>

    </>
  )
}

export default App
