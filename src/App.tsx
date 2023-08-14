import './App.css'
import {useEffect, useState,useRef} from "react"
import { motion, useInView,useAnimate, AnimatePresence} from"framer-motion"
function App() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const loanRef = useRef<HTMLDivElement>(null)
  const chiRef =useRef<HTMLDivElement>(null)
  const bwsRef =useRef<HTMLDivElement>(null)
  const cigRef = useRef<HTMLDivElement>(null)
  const [selectCard, setSelectCard] = useState<string>()
  const [card1, card1Animate] = useAnimate()
  const [card2,card2Animate] = useAnimate()
  const [card3,card3Animate] = useAnimate()
  const card1IsInView = useInView(card1)
  const card2IsInView = useInView(card2)
  const card3IsInView = useInView(card3)
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
  useEffect(()=>{
    if(card1IsInView){
      card1Animate(card1.current, {rotate:-35, translateX:"-17vw", translateY: '17vh'},{delay: (0.7)})
    }
  },[card1IsInView])
  useEffect(()=>{
    if(card2IsInView){
      card2Animate(card2.current,{rotate:35, translateX:"17vw"} , {delay: (0.7)})
  }
  },[card2IsInView])
  useEffect(()=>{
    if(card3IsInView){
      card3Animate(card3.current,{translateY:"-2vh", translateX:"-1vw" }, {delay: (0.7)})
  }
  },[card3IsInView])

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
          <h1 className="font-mono text-transparent text-8xl bg-clip-text text-white font-slim
          h-10" onMouseEnter={nameChange} 
          >{name}</h1>
        </motion.div>
        <motion.div className='justify-evenly w-[25vw] flex mr-20 mt-4'
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
           onClick={focusProject}
            >
            {project}
            </h1>
          <h1 className="font-mono text-white text-2xl h-10 font-slim
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
      className="text-white relative text-8xl font-black left-1/8 mt-40 mb-40">Experience</motion.h6>
      <motion.div 
      style={{
        opacity: loanInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >
      <motion.div 
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        onClick ={() => {setSelectCard("intern")}}
        layoutId={"intern"} 
        layout
        ref={loanRef}
        className="bg-gradient-to-l
        p-4
        from-blue-700 to-fuchsia-700
        bordered-xl h-[25vh] w-[21vw] relative left-3/10 rounded-xl mb-10 "
        >
          <motion.h5
          className="text-white" >
            Software Engineering Intern
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Loan
          </motion.h2>
          <motion.h2 className="text-white text-6xl font-black">
            Options
          </motion.h2>
      </motion.div>
      </motion.div>
      <AnimatePresence>
      {
        selectCard == "intern" && 
        <motion.div layoutId={selectCard} className="bg-gradient-to-l
        p-4
        from-blue-700 to-fuchsia-700
        bordered-xl h-[50vh] w-[50vw] relative left-3/10 rounded-xl mb-10 z-50">
          <div className="flex justify-between">
          <motion.h5
          className="text-white" >
            Software Engineering Intern
          </motion.h5>
          <motion.button 
          className='w-10 h-10 bg-purple-500  rounded-3xl'
          onClick={() => setSelectCard('')}>X</motion.button>
          </div>
          <motion.h2 className="text-white text-6xl font-black">
            Loan Options
          </motion.h2>
        </motion.div>
        
      }
      </AnimatePresence>
      <motion.div 
      className="ml-[15rem]"
      style={{
        opacity: bwsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      <motion.div layoutId={"as"}
        ref={bwsRef}
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        className="bg-gradient-to-r
        from-blue-700 to-purple-600
        p-4
        bordered-xl h-[25vh] w-[21vw] relative left-2/4 rounded-xl mb-10
        "
         >
          <motion.h5 className="text-white">
            Customer Service
          </motion.h5>
          <motion.h2 className=" text-white text-6xl font-black">
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
        bordered-xl h-[25vh] w-[21vw] relative left-3/10 rounded-xl mb-10"
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
         >
          <motion.h5 className="text-white">  
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Chicken
          </motion.h2>
          <motion.h2 className="text-white text-6xl font-black">
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
        bordered-xl h-[25vh] w-[21vw] relative left-2/4 rounded-xl mb-10
        "
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        >
          <motion.h5 className="text-white" >
            Customer Service
          </motion.h5>
          <motion.h2 className="text-white text-6xl font-black">
            Cignall
          </motion.h2>
      </motion.div>
     </motion.div>
     
    </div>
    <div className=' bg-black flex flex-col z10 h-[80vh]' ref={projectRef}>
    <motion.h6 className="text-white relative text-8xl font-black left-1/8 mb-40">Project</motion.h6>
    <motion.div>
    <div
    ref={card1}
    className="left-4/10 absolute z-10 origin-bottom-left"
    >
    <motion.div className="h-[42vh] w-[15vw] bg-gradient-to-b from-red-600 to-indigo-400 shadow-md text-white font-black text-2xl left-4/10 absolute z-10 p-5 rounded-2xl"
    whileHover={{ translateY:-60}}
    whileTap={{scale:0.9}}
    >
      Cygrogenic fridge 
    </motion.div>
    </div>
    <div ref={card2} className="z-30 left-4/10 absolute origin-bottom-left">
    <motion.div
    ref={card2} 
    className="h-[42vh] w-[15vw] bg-gradient-to-b from-blue-600 to-indigo-400 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl "
    whileHover={{ translateY:-60}}
    whileTap={{scale:0.9}}
    >
      E-restuarant
    </motion.div>     
    </div>
    <div ref={card3} className="z-30 left-4/10 absolute origin-bottom-left">
    <motion.div className="h-[42vh] w-[15vw] bg-gradient-to-b from-purple-600 to-indigo-500 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl
    
    "
    whileHover={{ translateY:-60}}
    whileTap={{scale:0.9}}
    >
      Bank Statement
    </motion.div>
    </div>
   
    </motion.div>
    </div>
    <div className=' bg-black flex flex-col z10 ' ref={contactRef} >
    <motion.h6 className="text-white relative text-8xl font-black left-1/8 mb-40 ">Contact</motion.h6>
    </div>

    </div>  
    </>
  )
}

export default App