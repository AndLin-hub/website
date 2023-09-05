import './App.css'
import {useEffect, useState,useRef} from "react"
import { motion, useInView,LayoutGroup} from"framer-motion"
function App() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const loanRef = useRef<HTMLDivElement>(null)
  const chiRef =useRef<HTMLDivElement>(null)
  const bwsRef =useRef<HTMLDivElement>(null)
  const cigRef = useRef<HTMLDivElement>(null)
  const [selectCard, setSelectCard] = useState<string>()
  const [mousePosition, setMousePosition] = useState({x:0 , y:0})
  const [name, setName] = useState("ANDIE LIN")
  const [project, setProject] = useState("PROJECT")
  const [experience, setExperience] = useState("EXPERIENCE")
  const [contact, setContact] = useState("CONTACT")
  const loanInView = useInView(loanRef, {once:true})
  const chiInView = useInView(chiRef, {once:true})
  const bwsInView = useInView(bwsRef, {once:true})
  const cigInView = useInView(cigRef, {once:true})
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const changeLetters = (word:String, setLetter: Function) =>{
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
  }

  const focusExperiment = () =>{
    experienceRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  const focusProject = () =>{
    projectRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  const focusContact = () =>{
    contactRef?.current?.scrollIntoView({behavior:'smooth'})
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
      className={` h-[40rem] w-[40rem] fixed rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xxl rotate animate-spin-slow overflow-hidden`}/>
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
          <h1 className="font-mono text-transparent text-[4vw] bg-clip-text text-white font-slim
          h-10" onMouseEnter={nameChange} 
          >{name}</h1>
        </motion.div>
        <motion.div className='justify-evenly w-[25vw] flex mr-20 mt-4'
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2,}}}>
          <h1 className="font-mono text-white text-[1vw] h-10 font-slim  mr-5
          "
          onMouseEnter={experienceChange}
          onClick={focusExperiment}
          >
            {experience}
          </h1>
          <h1 className="font-mono text-white text-[1vw] h-10 font-slim mr-5
          " 
           onMouseEnter={projectChange}
           onClick={focusProject}
            >
            {project}
            </h1>
          <h1 className="font-mono text-white text-[1vw] h-10 font-slim
          " 
           onMouseEnter={contactChange}
           onClick={focusContact}
            >
            {contact}
            </h1>
        </motion.div>

        </nav>
    </motion.div>
    <div>

    </div>
    <div className=' bg-black flex flex-col z10' 
        ref={experienceRef}>
      
      <motion.h6 
      className="text-white relative text-[4vw] font-black left-1/8 mt-40 mb-40">Experience</motion.h6>
      <LayoutGroup>

      <motion.div 
      style={{
        opacity: loanInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >
      <motion.div 
        data-isOpen={selectCard}
        whileHover={selectCard == "intern" ? {} : {scale:1.2}}
        whileTap={{scale:0.9}}
        onClick ={selectCard == "intern" ? () => {setSelectCard(" ")}: () => {setSelectCard("intern")}}
        exit={{ opacity: 0 }}
        layout
        ref={loanRef}
        className=
          "bg-gradient-to-l p-4 from-blue-700 to-fuchsia-700 bordered-xl h-[25vh] w-[21vw] relative left-1/4 rounded-xl mb-[2vw]" 
        >
          <motion.h5
          className="text-white" >
            Software Engineering Intern
          </motion.h5>
          <motion.h2 className="text-white text-[3vw] font-black">
            Loan
          </motion.h2>
          <motion.h2 className="text-white text-[3vw] font-black">
            Options
          </motion.h2>
        {
        selectCard == "intern" &&
        <motion.div>

        </motion.div>

        
        }
      </motion.div>
      </motion.div>
      <motion.div 
      className="ml-[15rem]"
      style={{
        opacity: bwsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      <motion.div layoutId={"as"}
        onClick ={() => {setSelectCard("bws")}}
        ref={bwsRef}
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        className={`bg-gradient-to-r
        from-blue-700 to-purple-600
        p-4
        bordered-xl h-[25vh] w-[21vw] relative left-2/4 rounded-xl mb-[2vw]
        `}
         >
          <motion.h5 className="text-white">
            Customer Service
          </motion.h5>
          <motion.h2 className=" text-white text-[3vw] font-black">
            BWS
          </motion.h2>
      </motion.div>
      </motion.div>
      
      <motion.div 
      style={{
        opacity: chiInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      <motion.div layoutId={"as"}
        ref={chiRef}
        className="bg-gradient-to-r
        p-4
        from-rose-500 to-blue-700
        bordered-xl h-[25vh] w-[21vw] relative left-1/4 rounded-xl mb-[2vw]"
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
         >
          <motion.h5 className="text-white">  
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-[3vw] font-black">
            Chicken
          </motion.h2>
          <motion.h2 className="text-white text-[3vw] font-black">
            Licken Good
          </motion.h2>
      </motion.div>
      </motion.div>
     <motion.div
     className="ml-[15rem]"
     style={{
      opacity: cigInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
     <motion.div layoutId={"as"}
        ref={cigRef}
        className="bg-gradient-to-l
        p-4
        from-red-400 to-blue-700
        bordered-xl h-[25vh] w-[21vw] relative left-2/4 rounded-xl mb-[2vw]
        "
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        >
          <motion.h5 className="text-white" >
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-[4vw] font-black">
            Cignall
          </motion.h2>
      </motion.div>
     </motion.div>
     </LayoutGroup>
     
    </div>
    <div className=' bg-black flex flex-col z10 h-[100vh]' ref={projectRef}>
    <motion.h6 className="text-white relative text-[4vw] font-black left-1/8 mb-40">Project</motion.h6>
    <LayoutGroup>
    <motion.div>
    <motion.div

    className="left-4/10 absolute z-10 origin-bottom-left"
    style={{originX:0,originY:1}}
    >
    <motion.div className="h-[42vh] w-[15vw] bg-gradient-to-b from-red-600 to-indigo-400 shadow-md text-white font-black text-2xl left-4/10 absolute z-10 p-5 rounded-2xl min-w-[12rem] min-h-[15rem]"
    whileHover={{y:-60,x:-30}}
    whileTap={{scale:0.9}}
    whileInView={{originX:0.5, originY:1, rotate:-35, transition:{delay:0.3}}}
    >
      Cygrogenic fridge 
    </motion.div>
    </motion.div>
    <div  className="z-30 left-4/10 absolute origin-bottom-left">
    <motion.div
    className="h-[42vh] w-[15vw] bg-gradient-to-b from-blue-600 to-indigo-400 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl  min-w-[12rem] min-h-[15rem]"
    whileHover={{ y:-60,x:-30}}
    whileTap={{scale:0.9}}
    whileInView={{originX:0.5, originY:1, rotate:-15, transition:{delay:0.3}}}
    >
      Twitter Sentimental Analysis
    </motion.div>     
    </div>
    <div className="z-30 left-4/10 absolute origin-bottom-left"
    >
    <motion.div className="h-[42vh] w-[15vw] bg-gradient-to-b from-purple-600 to-indigo-500 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl
    min-w-[12rem] min-h-[15rem] origin-bottom-left
    "
    whileHover={{y:-70,x:30}}
    whileTap={{scale:0.9}}
    whileInView={{originX:0.5,originY:1,rotate:15, transition:{delay:0.3}}}
    >
      Bank Statement
    </motion.div>
    </div>
    <div className="z-30 left-4/10 absolute origin-bottom-left"
    >
    <motion.div className="h-[42vh] w-[15vw] bg-gradient-to-b from-purple-600 to-indigo-500 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl
    min-w-[12rem] min-h-[15rem] origin-bottom-left
    "
    whileHover={{ translateY:-60, x: 30}}
    whileTap={{scale:0.9}}
    whileInView={{originX:0.5,originY:1,rotate:35, transition:{delay:0.3}}}
    >
      TicketTek Restock Web Scraper
    </motion.div>
    </div>
    </motion.div>
    </LayoutGroup>
    </div>
    <div className=' bg-black flex flex-col z10 ' ref={contactRef} >
    <motion.h6 className="text-white relative text-[4vw] font-black left-1/8 mb-40 ">Contact</motion.h6>
    </div>

    </div>  
    </>
  )
}

export default App