import Image from "next/image"
import styles from '@/css/stacksTableStyles.module.css'

interface tableProps {
    alt: string;
    src: string;
    content: string;
}

const TableContent: React.FC<tableProps> = ({ alt, src, content }) => {
    return (
        <>
            <div className="flex justify-center">
                <Image alt={alt} src={src} width={30} />
                <p className={`${styles.textStyle} pl-1`}>{content}</p>
            </div>
        </>
    )
}

export default TableContent