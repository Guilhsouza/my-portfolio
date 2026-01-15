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
    altImage: string,
    imageType: 'desktop' | 'mobile'
}


const ImageWithModal: React.FC<ImageWIthModalBody> = ({ bodyImage, image2, image3, altImage, imageType }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const imgType = imageType === 'desktop' ? 'aspect-video' : 'aspect-[9/16]'

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
                <div className='relative w-full aspect-video overflow-hidden rounded-lg cursor-pointer' onClick={openModal}>
                    <Image
                        src={bodyImage}
                        alt={altImage}
                        fill
                        className="object-cover"
                    />
                </div>

                <Modal
                    isOpen={isOpen}
                    className={styles.modal}
                    onRequestClose={closeModal}
                    overlayClassName={styles.overlay}
                    preventScroll={true}
                >
                    <div>
                        <Carousel className="w-full h-full">
                            <CarouselContent >
                                {images.map((image, index) => (
                                    <CarouselItem key={index} >
                                        <div className="flex justify-center">
                                            <div className={`relative w-full max-h-[80vh] overflow-hidden ${imgType}`}>
                                                <Image
                                                    src={image}
                                                    alt={`imagem ${index + 1}`}
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
