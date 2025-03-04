import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import styles from "@/css/modalStyles.module.css"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ImageWIthModalBody {
    bodyImage: string | StaticImageData,
    image2: string | StaticImageData,
    image3: string | StaticImageData,
    altImage: string
}


const ImageWithModal: React.FC<ImageWIthModalBody> = ({ bodyImage, image2, image3, altImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const images = [
        bodyImage,
        image2,
        image3
    ]

    useEffect(
        () => Modal.setAppElement('#imageFromProjects')
        , [])

    return (
        <>
            <div>
                <Image
                    src={bodyImage}
                    alt={altImage}
                    className="rounded-lg cursor-pointer"
                    onClick={openModal}
                />

                <Modal
                    isOpen={isOpen}
                    className={styles.modal}
                    onRequestClose={closeModal}
                    overlayClassName={styles.overlay}
                    preventScroll={true}
                >
                    <div>
                        <Carousel className="w-full max-w-2xl">
                            <CarouselContent >
                                {images.map((image, index) => (
                                    <CarouselItem key={index} >
                                        <div className="flex justify-center">
                                            <div className=" w-[650px] h-[600px] relative overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`imagem ${index + 1} `}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-xl cursor-grab object-cover"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </Modal >
            </div >
        </>
    )
}

export default ImageWithModal
