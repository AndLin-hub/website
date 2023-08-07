import './App.css'
import {useEffect, useState} from "react"
import { motion} from"framer-motion"
function App() {
  const [name, setName] = useState("ANDIE LIN")
  const [experience, setExperience] = useState("EXPERIENCE")
  const [contact, setContact] = useState("CONTACT")
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const changeLetters = (word:String, setLetter: Function) =>{
    //let og = word
    let count = 0
    const interval = setInterval(() =>{
        let test  = word.split("")
        .map((letter,index) =>{
          if(index < count){
            return letter
          }
          return letters[Math.floor(Math.random()*26)]
        } )
        .join("")
        if(count >= word.length){
          clearInterval(interval)
        }
        setLetter(test)
        count++;
    }, 50)
  }
  const nameChange = () =>{
    changeLetters("ANDIE LIN",setName)
  }
  const experienceChange = () =>{
    changeLetters("EXPERIENCE",setExperience)
  }
  const contactChange = () =>{
    changeLetters("CONTACT",setContact)
  }
  useEffect(()=>{
    setTimeout(nameChange,1400)
    setTimeout(experienceChange,2400)
    setTimeout(contactChange,2500)
  },[])
  return (
    <>
      <motion.div className="bg-black w-screen h-screen flex overflow-hidden"
      animate={{ }}
      transition={{delay:3, duration: 1}}
      > 
        <nav className='fixed top-0 flex w-screen justify-between mt-10 '>
        <motion.div  
          variants={{
            mid:{
              opacity:1,
              transition:{
                duration:1,
                delay:1,
              }
            },
            end:{
              x: "-3vw",y:"0", scale:0.35,
              transition:{
                duration:1,
                delay:2,
             }
            },after:{

            }
          }}
          initial={{opacity:0, x:'40vw',y:'40vh'}}
          animate={["mid","end"]}
          transition={{
            ease:"linear",
            delay:1,
          }}
          > 
          <h1 className="font-sans text-transparent text-8xl bg-clip-text text-white font-slim
          h-10" 
          >{name}</h1>
        </motion.div>
        <motion.div className='justify-evenly w-[25vw] flex mr-10 mt-4'
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2,}}}>
          <h1 className="font-sans text-white text-2xl h-10 font-slim
          hover:bg-gray-400 hover:text-black mr-5
          "
          onMouseEnter={() => changeLetters("EXPERIENCE",setExperience)}
          >
            {experience}
          </h1>
          <h1 className="font-sans  text-white text-2xl h-10 pl-1 pr-1 rounded-md
           font-slim hover:bg-white hover:text-black" 
           onMouseEnter={() => changeLetters("CONTACT",setContact)}
            >
            {contact}
            </h1>
        </motion.div>

        </nav>
    </motion.div>
    <div>

    </div>
    </>
  )
}

export default App
