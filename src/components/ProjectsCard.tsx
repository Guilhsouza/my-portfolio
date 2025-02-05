import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import Image, { StaticImageData } from "next/image"

interface ProjectCardBody {
    headerContent: string,
    bodyImage: string | StaticImageData,
    altImage: string,
    stacks: string[],
    description: string
}

const ProjectCard: React.FC<ProjectCardBody> = ({ headerContent, bodyImage, altImage, stacks, description }) => {
    return (
        <>
            <Card className="flex max-w-[370px] bg-gray-900 rounded-lg">
                <CardHeader className="flex justify-center text-xl">
                    {headerContent}
                </CardHeader>
                <CardBody>
                    <Image
                        src={bodyImage}
                        alt={altImage}
                        className="rounded-md"
                    />
                    {stacks}
                </CardBody>
                <CardFooter>
                    {description}
                </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCard