import './App.css'
import {useEffect, useState,useRef} from "react"
import { motion, useInView,LayoutGroup} from"framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import { inject } from '@vercel/analytics';
function App() {
  inject();
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const loanRef = useRef<HTMLDivElement>(null)
  const chiRef =useRef<HTMLDivElement>(null)
  const bwsRef =useRef<HTMLDivElement>(null)
  const cigRef = useRef<HTMLDivElement>(null)
  const skillRef = useRef<HTMLDivElement>(null)
  const mouse = useRef<HTMLDivElement>(null)
  const [selectCard, setSelectCard] = useState<string>()
  const [mousePosition, setMousePosition] = useState({x:0 , y:0})
  const [name, setName] = useState("ANDIE LIN")
  const [project, setProject] = useState("PROJECT")
  const [skill, setSkill] = useState("SKILL")
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
  const skillChange = () =>{
    changeLetters("SKILL",setSkill)
  }
  const focusExperience = () =>{
    experienceRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  const focusProject = () =>{
    projectRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  const focusContact = () =>{
    contactRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  const focusSkill = () =>{
    skillRef?.current?.scrollIntoView({behavior:'smooth'})
  }
  useEffect(()=>{
    setTimeout(nameChange,1000)
    setTimeout(experienceChange,2000)
    setTimeout(contactChange,2000)
    setTimeout(projectChange,2000)
    setTimeout(skillChange,2000)
    setTimeout(focusExperience,2500)
  },[])
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);
  useEffect(() => {
    if (mouse.current) {
      mouse.current.style.top = mousePosition.y - 360 + "px";
      mouse.current.style.left = mousePosition.x - 360  + "px";
    }
  },[mousePosition.x,mousePosition.y])
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('andieLinResume.docx').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'andieLinResume.docx';
            alink.click();
        })
    })
}
  return (
    <>
      <div
      className="overflow-hidden relative z-20"
      > 
      <motion.div 
      animate={{left:mousePosition.x -100,top:mousePosition.y-100,}}
      transition={{duration:1}}
      ref={mouse}
      className={'h-[15rem] w-[15rem] fixed rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-spin-slow blur-3xl z-10'}/>
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
          onClick={focusExperience}
          >
            {experience}
          </h1>
          <h1 className="font-mono text-white text-[1vw] h-10 font-slim  mr-5
          "
          onMouseEnter={skillChange}
          onClick={focusSkill}
          >
            {skill}
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
    <div className='bg-black overflow-hidden' ref={experienceRef}>
      
      <motion.h6 
      className="text-white relative text-[4vw] font-sans left-1/8 mt-40 mb-40 z-20">Experience</motion.h6>
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
        animate={{}}
        className={
          selectCard =="intern" ?
          "bg-gradient-to-l p-4 from-blue-700 to-fuchsia-700 bordered-xl h-[40vh] w-[25vw] relative z-20 left-1/4 rounded-xl mb-[2vw] overflow-auto" :
          "bg-gradient-to-l p-4 from-blue-700 to-fuchsia-700 bordered-xl h-[25vh] w-[21vw] relative z-20 left-1/4 rounded-xl mb-[2vw]"
        }
        >
          <motion.h5
          layout
          className="text-white justify-between flex" >
            <motion.h5> Software Engineering Intern</motion.h5>
            <motion.h5>June 23-Aug 23</motion.h5>
          </motion.h5>
          <motion.h2 className="text-white text-[3vw] font-black">
            Loan Options 
          </motion.h2>
          <motion.h2 className="text-white text-[3vw] font-sans">
           
          </motion.h2> 
        {selectCard == "intern" &&
          <>
          <motion.li className="text-white mt-5 ml-2">
            Built a website used to analyse bank statements to streamline lender selection process by broker
          </motion.li>
          <motion.li className="text-white mt-2 ml-2">
            Full Stack Development made with Python backend, FastAPI and NextJS
          </motion.li>
          <motion.li className="text-white mt-2 ml-2">
            Collaborate with brokers and ui/ux designers
          </motion.li>
          </>
        }
      </motion.div>
      </motion.div>
      <motion.div 
      style={{
        opacity: bwsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      <motion.div layoutId={"as"}
        onClick ={selectCard == "bws" ? () => {setSelectCard(" ")}: () => {setSelectCard("bws")}}
        ref={bwsRef}
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        className={
          selectCard =="bws" ?
          `bg-gradient-to-r
        from-blue-700 to-purple-600
        p-4
        bordered-xl h-[40vh] w-[25vw] relative left-6/10 rounded-xl mb-[2vw] z-20
        overflow-auto`
          :
          `bg-gradient-to-r
        from-blue-700 to-purple-600
        p-4
        bordered-xl h-[25vh] w-[21vw] relative left-6/10 rounded-xl mb-[2vw] z-20
        `}
         >
          <motion.h5 className="text-white justify-between flex">
            <motion.h5>Customer Service</motion.h5>
            <motion.h5>2021-2022</motion.h5>
          </motion.h5>
          <motion.h2 className=" text-white text-[3vw] font-black">
            BWS
          </motion.h2>
          {selectCard == "bws" &&
           <>
           <motion.li className="text-white mt-5 ml-2">
            Assist customers with questions or recommendations.
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Stocking Shelves and unloading pallets 
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Ability to work alone and maintain day to day operations.
           </motion.li>
           </>
        
        }
      </motion.div>
      </motion.div>
      
      <motion.div 
      style={{
        opacity: chiInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      <motion.div layoutId={"as"}
        ref={chiRef}
        className=
        {
          selectCard == "chicken" ?
          "bg-gradient-to-r p-4 from-rose-500 to-blue-700 bordered-xl h-[40vh] w-[25vw] relative left-1/4 rounded-xl mb-[2vw] z-20 overflow-auto" 
          :
        "bg-gradient-to-r p-4 from-rose-500 to-blue-700 bordered-xl h-[25vh] w-[21vw] relative left-1/4 rounded-xl mb-[2vw] z-20"
        }
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        onClick ={selectCard == "chicken" ? () => {setSelectCard(" ")}: () => {setSelectCard("chicken")}}
         >
          <motion.h5 className="text-white justify-between flex">  
            <motion.h5>Customer Service</motion.h5>
            <motion.h5>2015-2018</motion.h5>
          </motion.h5>
          <motion.h2 className="text-white text-[3vw] font-black">
            Chicken
          </motion.h2>
          <motion.h2 className="text-white text-[3vw] font-black">
            Licken Good
          </motion.h2>
          {selectCard == "chicken" &&
           <>
           <motion.li className="text-white mt-5 ml-2">
           Handled over 100 customer orders and inquiries in person on a daily basis.
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Initiated store closing procedures, including management of daily settlement 
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Assisted day sales operations, including reordering inventory and stock take
           </motion.li>
           </>
        
        }
      </motion.div>
      </motion.div>
     <motion.div
     style={{
      opacity: cigInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
     <motion.div layoutId={"as"}
        ref={cigRef}
        className=
        {
        selectCard =="cignall" ?
        "bg-gradient-to-l p-4 from-red-400 to-blue-700 bordered-xl h-[40vh] w-[25vw] relative left-6/10 rounded-xl mb-[2vw] z-20 overflow-auto"
        :
        "bg-gradient-to-l p-4  from-red-400 to-blue-700 bordered-xl h-[25vh] w-[21vw] relative left-6/10 rounded-xl mb-[2vw] z-20"}
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        onClick ={selectCard == "cignall" ? () => {setSelectCard(" ")}: () => {setSelectCard("cignall")}}
        >
          <motion.h5 className="text-white flex justify-between" >
            <motion.h5>
            Customer Service
            </motion.h5>
            <motion.h5>
            2013-2015
            </motion.h5>
          </motion.h5>
          <motion.h2 className="text-white text-[4vw] font-black">
            Cignall
          </motion.h2>

          {selectCard == "cignall" &&
           <>
           <motion.li className="text-white mt-5 ml-2">
           Merchandised store displays to maintain visual appeal and optimized for promotions.
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Completed customer transactions and answered customer questions.
           </motion.li>
           <motion.li className="text-white mt-2 ml-2">
           Greeted every customer with friendly conversation, and offer of assistance to enhance customer experience, and buying opportunities.
           </motion.li>
           </>
        
        }
      </motion.div>
     </motion.div>
     </LayoutGroup>
    </div>
    <div className=' bg-black z-10 overflow-hidden' ref={skillRef}>
    <motion.h6 className="text-white relative text-[4vw] font-sans left-1/8 mb-40 z-20">Skills</motion.h6>
    <div className="font-black h-[30vh] w-[20vw] relative bg-gradient-to-l from-blue-700 to-fuchsia-700 left-1/4 rounded-xl p-4 z-30 text-white">Frontend development
    <p className="font-light">ReactJS</p>
    <p className="font-light">Javascript/TypeScript</p>
    <p className="font-light">Tailwind CSS</p>
    <p>Framework</p>
    <p className="font-light">NextJS</p>
    </div>
    <div className="font-black h-[35vh] w-[20vw] relative bg-gradient-to-l from-red-400 to-blue-700 left-6/10 rounded-xl p-4 z-30 text-white">Backend development
    <p className="font-light">Python</p>
    <p className="font-light">C++</p>
    <p className="font-light">C</p>
    <p className="font-light">Java</p>
    <p>Framework</p>
    <p className="font-light">Django</p>
    <p className="font-light">FastAPI</p>
    </div>
    </div>
    <div className=' bg-black z-10 h-[100vh]' ref={projectRef}>
    <motion.h6 className="text-white relative text-[4vw] font-sans left-1/8 mb-40 z-20">Project</motion.h6>
    <LayoutGroup>
    <motion.div>
    <motion.div 
    layout
    className=
    {
      selectCard =="home" ?
      "h-[50vh] w-[20vw] bg-gradient-to-b from-red-500 to-red-300 text-white font-black text-2xl left-4/10 absolute p-5 rounded-2xl min-w-[12rem] min-h-[15rem] overflow-auto z-50"
      :
      "h-[42vh] w-[15vw] bg-gradient-to-b from-red-500 to-red-300 text-white font-black text-2xl left-4/10 absolute p-5 rounded-2xl min-w-[12rem] min-h-[15rem] z-10"
    }
    onClick ={selectCard == "home" ? () => {setSelectCard(" ")}: () => {setSelectCard("home")}}
    whileHover={selectCard != "home" ? { y:-20, x: -40} :{}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "home" ? {originX:0.5,originY:1,rotate:-65, transition:{delay:0.3}}: {transition:{delay:2}}}
    transition={{duration:0.3}}
    >
      Home server

      {
        selectCard == "home" && 
        <motion.h1 className="font-light mt-10 text-xl">
          Built a home media server to host our local tv shows and movies. Using promox as a container manager for resources and VMs.
        </motion.h1>
      }
    </motion.div>
    <motion.div className={
    selectCard == "fridge"?
    "h-[50vh] w-[20vw] bg-gradient-to-b from-red-600 to-rose-400 shadow-md text-white font-black text-2xl left-4/10  absolute z-50 p-5 rounded-2xl min-w-[12rem] min-h-[15rem] overflow-auto"
    :
    "h-[45vh] w-[15vw] bg-gradient-to-b from-red-600 to-rose-400 shadow-md text-white font-black text-2xl left-4/10 absolute z-10 p-5 rounded-2xl min-w-[12rem] min-h-[15rem]"}
    whileHover={selectCard != "fridge" ?{y:-60,x:-30} :{}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "fridge" ?{originX:0.5, originY:1, rotate:-35, transition:{delay:0.3}} :{}}
    onClick ={selectCard == "fridge" ? () => {setSelectCard(" ")}: () => {setSelectCard("fridge")}}
    transition={{duration:0.3}}
    >
      Cygrogenic fridge 
      {
        selectCard == "fridge" &&
        <motion.h1 className="text-white font-light mt-10 text-xl">
          Created an web application for a client to enable off site monitorization of a cygrogenic fridge. With alert notifications capabilities to email or phone number directly with adjustable parameters 
          such as time or which channel needing to be monitored.
        </motion.h1>
      }
    </motion.div>
    <motion.div
    layout
    className={
      selectCard =="twitter" ?
      "h-[50vh] w-[20vw] bg-gradient-to-b from-fuchsia-600 to-red-500 text-white font-black text-2xl left-4/10 absolute z-50 p-5 rounded-2xl  min-w-[12rem] min-h-[15rem] overflow-auto"
      :
      "h-[42vh] w-[15vw] bg-gradient-to-b from-fuchsia-600 to-red-500 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl  min-w-[12rem] min-h-[15rem]"}
    whileHover={selectCard != "twitter" ?{ y:-60,x:-30}:{}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "twitter" ?{originX:0.5, originY:1, rotate:-15, transition:{delay:0.3}} :{}}
    onClick ={selectCard == "twitter" ? () => {setSelectCard(" ")}: () => {setSelectCard("twitter")}}
    transition={{duration:0.3}}
    >
      Twitter Sentimental Analysis
      {
        selectCard == "twitter" &&
        <motion.h1 className="text-white font-light mt-10 text-xl">
          Built a website use to perform sentimental analysis on key phrases based on twitter's sentiment on topics. Used to determine if a topic has a negative or positive overview based on
          most recent tweets about selected topic.
        </motion.h1>
      }
    </motion.div>     

    <motion.div
    layout className={
      selectCard == "bank" ?
      "h-[50vh] w-[20vw] bg-gradient-to-b from-purple-600 to-pink-500 text-white font-black text-2xl left-4/10 absolute z-50 p-5 rounded-2xl min-w-[12rem] min-h-[15rem] overflow-auto"
      :
      "h-[42vh] w-[15vw] bg-gradient-to-b from-purple-600 to-pink-500 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl min-w-[12rem] min-h-[15rem]"}
    onClick ={selectCard == "bank" ? () => {setSelectCard(" ")}: () => {setSelectCard("bank")}}
    whileHover={selectCard != "bank" ? {y:-70,x:30} : {}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "bank" ? {originX:0.5,originY:1,rotate:15, transition:{delay:0.3}} : {}}
    transition={{duration:0.3}}
    >
      Bank Statement Web Application
    {
      selectCard == "bank" &&
      <>
      <motion.h1 className="text-white font-light mt-10 text-xl">
        Bank Statement analysis application made during internship.
        Website made for in-house brokers' use to streamline the lender selection 
        process by extracting relevant data in bank statements to display simple measureable metrics. 
      </motion.h1>
      </>
    }
    </motion.div>

    <motion.div 
    layout
    className=
    {
      selectCard =="tickettek" ?
      "h-[50vh] w-[20vw] bg-gradient-to-b from-violet-600 to-purple-400 text-white font-black text-2xl left-4/10 absolute z-50 p-5 rounded-2xl min-w-[12rem] min-h-[15rem] overflow-auto"
      :
      "h-[42vh] w-[15vw] bg-gradient-to-b from-violet-600 to-purple-400 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl min-w-[12rem] min-h-[15rem]"
    }
    onClick ={selectCard == "tickettek" ? () => {setSelectCard(" ")}: () => {setSelectCard("tickettek")}}
    whileHover={selectCard != "tickettek" ? { y:-20, x: 30} :{}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "tickettek" ? {originX:0.5,originY:1,rotate:35, transition:{delay:0.3}}: {transition:{delay:2}}}
    transition={{duration:0.3}}
    >
      TicketTek Restock Web Scraper

      {
        selectCard == "tickettek" && 
        <motion.h1 className="font-light mt-10 text-xl">
          Built a web scraper for tickettek using python and regex to play an sound alert whenever a ticket would restock. 
          Personal project that used to experiment with web requests and learn how to use basic regex. 
        </motion.h1>
      }
    </motion.div>

    <motion.div 
    layout
    className=
    {
      selectCard =="capstone" ?
      "h-[50vh] w-[20vw] bg-gradient-to-b from-indigo-600 to-indigo-400 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl min-w-[12rem] min-h-[15rem] overflow-auto"
      :
      "h-[42vh] w-[15vw] bg-gradient-to-b from-indigo-600 to-indigo-400 text-white font-black text-2xl left-4/10 absolute z-30 p-5 rounded-2xl min-w-[12rem] min-h-[15rem]"
    }
    onClick ={selectCard == "capstone" ? () => {setSelectCard(" ")}: () => {setSelectCard("capstone")}}
    whileHover={selectCard != "capstone" ? { y:-20, x: 30} :{}}
    whileTap={{scale:0.9}}
    whileInView={selectCard != "capstone" ? {originX:0.5,originY:1,rotate:65, transition:{delay:0.3}}: {transition:{delay:2}}}
    transition={{duration:0.3}}
    >
      Generative AI image discriminator 

      {
        selectCard == "capstone" && 
        <motion.h1 className="font-light mt-10 text-xl">
          Built a discriminator AI to determine if chest x-ray imaging were authentic or created by generative AI.
          Made with three different discriminating machine learning algorithms to determine most efficient algorithm.
        </motion.h1>
      }
    </motion.div>

    
    </motion.div>
    </LayoutGroup>
    </div>
    





    <div className=' bg-black flex flex-col z-50 h-[40vh]' ref={contactRef} >
      <motion.h6 className="text-white relative text-[4vw] font-sans left-1/8 mb-20 z-40">Contact</motion.h6>
      <div className='flex justify-evenly '>
        <IconContext.Provider value={{size:"3vw"}}>
        <div  className='text-white  z-20 text-center' >
        <FaGithub onClick={()=> window.open("https://github.com/AndLin-hub","_blank")}></FaGithub>
        <a>Github</a>
        </div>
        <div className='text-white z-20 text-center'>
        <FaLinkedin onClick={()=> window.open("https://www.linkedin.com/in/andie-lin/","_blank")} />
        <a>LinkedIn</a>
        </div>
        <div className='text-white  z-20 text-center '>
        <FaEnvelope />
        <a>andie.lin1@outlook.com</a>
        </div>
        <div className='text-white  z-20 text-center'>
        <FaFile onClick={()=> onButtonClick()} />
        <a>Resume</a>
        </div>
      </IconContext.Provider>
      </div>
      </div>
    </div>  
    </>
  )
}

export default App