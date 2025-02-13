import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import ImageWithModal from "./ImageWithModal"

interface ProjectCardBody {
    headerContent: string,
    bodyImage: string | StaticImageData,
    altImage: string,
    stacks: ReactNode[],
    description: string
}

const ProjectCard: React.FC<ProjectCardBody> = ({ headerContent, bodyImage, altImage, stacks, description }) => {
    return (
        <>
            <Card className="max-w-[370px] flex-col bg-gray-900 rounded-lg">
                <CardHeader className="flex justify-center text-xl">
                    {headerContent}
                </CardHeader>
                <CardBody id="imageFromProjects">
                    <ImageWithModal
                        bodyImage={bodyImage}
                        altImage={altImage}
                    />
                    <div className="flex gap-2 mt-4">
                        {stacks}
                    </div>
                </CardBody>
                <CardFooter>
                    {description}
                </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCard