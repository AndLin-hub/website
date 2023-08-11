import './App.css'
import {useEffect, useState,useRef} from "react"
import { motion} from"framer-motion"
function App() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({x:0 , y:0})
  const [name, setName] = useState("ANDIE LIN")
  const [project, setProject] = useState("PROJECT")
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
  const projectChange = () =>{
    changeLetters("PROJECT",setProject)
  }
  const onMouseMove = (e:any) =>{
    setMousePosition({x: e.clientX ,y:e.clientY})
    console.log(e.clientY)
  }

  const focusExperiment = () =>{
    experienceRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  useEffect(()=>{
    setTimeout(nameChange,1000)
    setTimeout(experienceChange,2000)
    setTimeout(contactChange,2000)
    setTimeout(projectChange,2000)
  },[])
  return (
    <>
      <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative z-20"
      > 
      <motion.div 
      animate={{left:mousePosition.x -360,
      top:mousePosition.y-360,}}
      transition={{duration:1}}
      className={` h-[40rem] w-[40rem] fixed rounded-full bg-gradient-to-r from-blue-400 to-green-200 blur-xxl rotate animate-spin-slow overflow-hidden`}/>
      <motion.div className="bg-black max-h-screen max-w-screen w-screen h-screen flex overflow-hidden"
      transition={{delay:3, duration: 1}}
      > 
        <nav className='fixed top-0 flex w-screen justify-between mt-10 z-20'>
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
          <h1 className="font-mono text-transparent text-8xl bg-clip-text text-white font-slim
          h-10" onMouseEnter={nameChange} 
          >{name}</h1>
        </motion.div>
        <motion.div className='justify-evenly w-[25vw] flex mr-10 mt-4'
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2,}}}>
          <h1 className="font-mono text-white text-2xl h-10 font-slim  mr-5
          "
          onMouseEnter={experienceChange}
          onClick={focusExperiment}
          >
            {experience}
          </h1>
          <h1 className="font-mono text-white text-2xl h-10 font-slim mr-5
          " 
           onMouseEnter={projectChange}
            >
            {project}
            </h1>
          <h1 className="font-mono text-white text-2xl h-10 font-slim mr-5
          " 
           onMouseEnter={contactChange}
            >
            {contact}
            </h1>
        </motion.div>

        </nav>
    </motion.div>
    <div>

    </div>
    <div className=' bg-black flex flex-col z10' ref={experienceRef}>
      <motion.h6 className="text-white relative text-8xl font-black left-1/8 mb-40">Experience</motion.h6>
      <motion.div layoutId={"as"} className="bg-gradient-to-l
        p-4
        from-blue-700 to-fuchsia-700
        bordered-xl h-[20vh] w-[21vw] relative left-1/4 rounded-xl mb-10 ">
          <motion.h5 className="text-white" >
            Software Engineering Intern
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Loan Options
          </motion.h2>
      </motion.div>
      <motion.div layoutId={"as"}className="bg-gradient-to-r
        from-blue-700 to-purple-600
        p-4
        bordered-xl h-[20vh] w-[21vw] relative left-2/4 rounded-xl mb-10">
          <motion.h5 className="text-white">
            Customer Service
          </motion.h5>
          <motion.h2 className=" text-white text-6xl font-black">
            BWS
          </motion.h2>
      </motion.div>
      <motion.div layoutId={"as"}className="bg-gradient-to-r
        p-4
        from-rose-500 to-blue-700
        bordered-xl h-[20vh] w-[21vw] relative left-1/4 rounded-xl mb-10">
          <motion.h5 className="text-white">
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Chicken Licken Good
          </motion.h2>
      </motion.div>
      <motion.div layoutId={"as"}className="bg-gradient-to-l
        p-4
        from-red-400 to-blue-500
        
        bordered-xl h-[20vh] w-[21vw] relative left-2/4 rounded-xl mb-10">
          <motion.h5 className="text-white">
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Cignall
          </motion.h2>
      </motion.div>
    </div>
    <div className=' bg-black flex flex-col z10' >
    <motion.h6 className="text-white relative text-8xl font-black left-1/8 mb-40">Project</motion.h6>
    <motion.div>
      Cygrogenic fridge 
    </motion.div>
    <motion.div>
      e-restuarant
    </motion.div>
    <motion.div>
      Bank Statement
    </motion.div>
    </div>
    <div className=' bg-black flex flex-col z10' >
    <motion.h6 className="text-white relative text-8xl font-black left-1/8 mb-40">Contact</motion.h6>
    </div>

    </div>  
    </>
  )
}

export default App
