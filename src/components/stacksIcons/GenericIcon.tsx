interface GenericIconBody {
    bgColor: string,
    iconName: string,
    fontColor: string
}

const GenericIcon: React.FC<GenericIconBody> = ({ bgColor, iconName, fontColor }) => {
    return (
        <>
            <p
                style={{
                    backgroundColor: bgColor,
                    color: fontColor,
                }}
                className={'rounded-full px-2.5'}>{iconName}</p>
        </>
    )
}

export default GenericIcon