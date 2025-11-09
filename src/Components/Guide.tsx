import MarkdownPage from "../Pages/MarkdownPage";



export default function Guide(props: { path: string }) {
    const urlPath = props.path.split('/').slice(1).join('/');
    const fullSrc = `https://justin-garey-public-storage.s3.us-east-2.amazonaws.com/Guides/${urlPath}.md`;
    return (
        <MarkdownPage src={fullSrc} />
    )
}