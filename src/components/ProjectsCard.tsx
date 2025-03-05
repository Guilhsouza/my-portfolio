import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import ImageWithModal from "./ImageWithModal"

interface ProjectCardBody {
    headerContent: string,
    bodyImage: string | StaticImageData,
    image2: string | StaticImageData,
    image3: string | StaticImageData,
    altImage: string,
    stacks: ReactNode[],
    description: string
}

const ProjectCard: React.FC<ProjectCardBody> = ({ headerContent, bodyImage, image2, image3, altImage, stacks, description }) => {
    return (
        <>
            <Card className="max-w-[660px] flex-col bg-gray-900 rounded-lg">
                <CardHeader className="flex justify-center">
                    <p className="text-center text-xl">{headerContent}</p>
                </CardHeader>
                <CardBody id="imageFromProjects">
                    <ImageWithModal
                        bodyImage={bodyImage}
                        image2={image2}
                        image3={image3}
                        altImage={altImage}
                    />
                    <div className="flex gap-2 mt-4">
                        {stacks}
                    </div>
                </CardBody>
                <CardFooter className="text-justify pb-6">
                    {description}
                </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCard