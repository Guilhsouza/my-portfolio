import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import styles from "@/css/modalStyles.module.css"

interface ImageWIthModalBody {
    bodyImage: string | StaticImageData,
    altImage: string
}


const ImageWithModal: React.FC<ImageWIthModalBody> = ({ bodyImage, altImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);


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
                        <button onClick={closeModal}>fechar modal</button>
                        <Image
                            src={bodyImage}
                            alt="Modal Image fullscreen"
                            className="rounded-xl"
                        />
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default ImageWithModal
