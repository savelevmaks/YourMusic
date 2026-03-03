import React, { useState, useEffect } from "react";
import "./NewReleases.css";
import NewReleaseCard from "./NewReleaseCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const NewReleases = ({ releases }) => {
    // Настраиваем Embla: 
    // loop - бесконечность
    // align: "center" - карточка всегда по центру
    // skipSnaps: false - чтобы листалось ровно по одной
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: "center",
        skipSnaps: false 
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Функции для кнопок
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    // Следим за изменением слайда
    useEffect(() => {
        if (!emblaApi) return;

        // Функция, которая обновляет индекс
        const updateIndex = () => {
            // selectedScrollSnap() возвращает индекс текущего слайда в центре
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        // Запускаем при загрузке, чтобы установить начальный индекс
        updateIndex();

        // Подписываемся на событие "select" (срабатывает, когда слайд встал на место)
        emblaApi.on("select", updateIndex);

        // Очистка подписки при удалении компонента
        return () => {
            emblaApi.off("select", updateIndex);
        };
    }, [emblaApi]);

    return (
        <section className="releases-section">
            <div className="section-header">
                <h2>Новые релизы</h2>
                
                <div className="slider-controls">
                    <button onClick={scrollPrev} className="nav-arrow">
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="nav-arrow">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Контейнер Embla */}
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