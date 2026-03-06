import React, { useState, useEffect } from "react";
import "./NewReleases.css";
import NewReleaseCard from "./NewReleaseCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const NewReleases = ({ releases }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: "center",
        skipSnaps: false 
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const updateIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        updateIndex();

        emblaApi.on("select", updateIndex);

        return () => {
            emblaApi.off("select", updateIndex);
        };
    }, [emblaApi]);

    return (
        <section className="releases-section">
            <div className="section-header">
                <h2 className="section-header-h">Новые релизы</h2>
                
                <div className="slider-controls">
                    <button onClick={scrollPrev} className="nav-arrow">
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="nav-arrow">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    
                    {releases.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <NewReleaseCard 
                                title={item.title}
                                artist={item.artist}
                                coverImage={item.coverImage}
                                artistImage={item.artistImage}
                                isActive={index === selectedIndex} 
                                onClick={() => emblaApi && emblaApi.scrollTo(index)} 
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default NewReleases;