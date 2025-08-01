import bg from "../assets/bg.jpg"
import profile from "../assets/image01.jpg"
function Works() {
  const realismTattoos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=300&h=400&fit=crop",
      alt: "Realistic lion tattoo"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      alt: "Realistic portrait tattoo"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=400&fit=crop",
      alt: "Realistic nature tattoo"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop",
      alt: "Realistic face tattoo"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1594736797933-d0acc622d75a?w=300&h=400&fit=crop",
      alt: "Realistic sleeve tattoo"
    }
  ];

  const portraitTattoos = [
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=300&h=400&fit=crop&sat=-50",
      alt: "Portrait tattoo 1"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop&sat=-30",
      alt: "Portrait tattoo 2"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=400&fit=crop&sat=-40",
      alt: "Portrait tattoo 3"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop&sat=-20",
      alt: "Portrait tattoo 4"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1594736797933-d0acc622d75a?w=300&h=400&fit=crop&sat=-35",
      alt: "Portrait tattoo 5"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=300&h=400&fit=crop&brightness=0.8",
      alt: "Portrait tattoo 6"
    }
  ];
                // const Realism=[img:{bg},img:{profile}]
    return(
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="relative min-h-screen  bg-cover  bg-center bg-no-repeat before:absolute  overflow-hidden before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-grey-900 before:to-gray-800 before:opacity-60 ">
                <div className="relative min-h-screen bg-black/55 pt-5   overflow-hidden">
                  <div className="text-center mb-8 md:mb-16">
                  <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-white mb-4">
                    WORKS
                  </h1>
                </div>

                <div className="mb-12 md:mb-20">
                    <h2 className="text-xl md:text-2xl font-light text-white text-center mb-8 md:mb-12 tracking-wide">
                      Realism
                    </h2>

                    {/* Mobile: Vertical Stack, Desktop: Horizontal Scroll */}
                    <div className="md:flex md:justify-center md:items-center md:gap-6 md:overflow-x-auto md:pb-4">
                      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                        {realismTattoos.map((tattoo) => (
                          <div 
                            key={tattoo.id}
                            className="relative group cursor-pointer md:flex-shrink-0"
                          >
                            <div className="w-full md:w-48 h-80 md:h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                              <img 
                                src={tattoo.image}
                                alt={tattoo.alt}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                              />
                              {/* Overlay with logo/watermark */}
                              {/*  */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                    
                  {/* Portraits & Mini Portraits Section */}
                  <div className="mb-12 md:mb-20">
                    <h2 className="text-xl md:text-2xl font-light text-center mb-8 md:mb-12 tracking-wide">
                      Portraits & Mini Portraits
                    </h2>
                    
                    {/* Mobile: Single column, Desktop: Grid */}
                    <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                      <div className="flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-6 md:max-w-6xl">
                        {portraitTattoos.map((tattoo) => (
                          <div 
                            key={tattoo.id}
                            className={`relative group cursor-pointer ${tattoo.id === 11 ? 'md:col-start-3' : ''}`}
                          >
                            <div className="w-full md:w-48 h-80 md:h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                              <img 
                                src={tattoo.image}
                                alt={tattoo.alt}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                              />
                              
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

    
                </div>
            </div>
        </>
    )
}
export default Works;