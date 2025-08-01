import React from 'react';
import bg from "../assets/bg.jpg";
import { motion } from 'framer-motion';
import profile from "../assets/image01.jpg"
import { Link, useNavigate } from 'react-router-dom';


function MainLayout() {
    const navigate= useNavigate();

    return(
        <>

        <div style={{ backgroundImage: `url(${bg})` }} className="relative min-h-screen  bg-cover  bg-center bg-no-repeat before:absolute  overflow-hidden before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-grey-900 before:to-gray-800 before:opacity-60 ">
            {/* Background geometric shapes */}
            
            
            {/* Main content container */}
            <motion.div className="animation"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
        <div className="relative min-h-screen bg-black/55   overflow-hidden">
         {/* Background geometric shapes - same as before */}
         <div className="absolute inset-0">
           {/* Keep existing background shapes */}
         </div>

         {/* Main content container */}
         <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 py-8 sm:py-16">

           {/* Profile Image */}
           <div className="mb-6 sm:mb-12">
             <div className="w-70 h-70 sm:w-66 sm:h-66 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-100 xl:h-100 rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl">
               <img 
                //  src={profile} 
                src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'
                 alt="Profile" 
                 className="w-full h-full object-cover grayscale"
               />
             </div>
           </div>

            {/* Name */}

            <div className="text-center mb-8 sm:mb-16">
            <h1 style={{ fontFamily: 'Arial Black, Helvetica, sans-serif', fontStretch: 'condensed' }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-widest sm:tracking-widest md:tracking-wider lg:tracking-[0.25em] leading-none sm:leading-tight">
                <div className="block sm:inline">AKHIL</div>
                <div className="block sm:inline sm:ml-9 md:ml-11 lg:ml-12">DAS</div>
            </h1>
            </div>

           {/* Expertise Section */}
           <div className="text-center max-w-xs sm:max-w-md px-4">
             <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-6 sm:mb-8 tracking-widest">
               Expertise
             </h4>

             <div className="space-y-3 sm:space-y-4">
               <p className="text-base sm:text-lg md:text-xl font-bold text-white/80 tracking-widest leading-relaxed">
                 Black and Grey Realism
               </p>
               <p className="text-base sm:text-lg md:text-xl font-bold text-white/80 tracking-widest leading-relaxed">
                 Portraits & Mini Portraits
               </p>
               <p className="text-base sm:text-lg md:text-xl font-bold text-white/80 tracking-widesttracking-widest leading-relaxed">
                 Custom Designs & Dot works
               </p>
             </div>
           </div>

           {/* Navigation Menu - Stack vertically on mobile */}
            <div className="mt-8 sm:mt-16 mb-6 sm:mb-8">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                <button onClick={()=>{navigate("/")}} className="px-6 sm:px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 tracking-wider text-sm font-light">
                  HOME
                </button>
                <button onClick={()=>{navigate("/works")}} className="px-6 sm:px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 tracking-wider text-sm font-light">
                  WORKS
                </button>
                <button onClick={()=>{navigate("/about")}} className="px-6 sm:px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 tracking-wider text-sm font-light">
                  ABOUT
                </button>
                <button onClick={()=>{navigate("/contatct")}} className="px-6 sm:px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 tracking-wider text-sm font-light">
                  CONTACT
                </button>
              </div>
            </div>
         </div>

         {/* Keep existing atmospheric elements */}
        </div>
      </motion.div>
    </div>

        </>
    )
}
export default MainLayout;