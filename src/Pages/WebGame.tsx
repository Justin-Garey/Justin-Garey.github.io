

export default function WebGame(props: { src: string }) {
    return (
        <iframe
            src={props.src}
            style={{ width: '100%', height: '100vh', border: 'none' }}
        />
    )
}