

export default function WebGame(props: { src: string; title: string }) {
    return (
        <div role="main">
            <h1 className="sr-only">{props.title}</h1>
            <iframe
                title={props.title}
                src={props.src}
                style={{ width: '100%', height: '100vh', border: 'none' }}
            />
        </div>
    )
}