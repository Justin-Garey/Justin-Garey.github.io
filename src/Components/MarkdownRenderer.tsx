import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React from 'react';

function MarkdownImageRenderer(props: any) {
    return (
        <div className="flex justify-center my-4">
            <img {...props} className="md-image-width" />
        </div>
    );
}

function ImagesWithoutPTags(props: any) {
    if (!props.children) {
        return <p {...props} />;
    }
    else if (props.children.type && props.children.type == 'img') {
        return <MarkdownImageRenderer {...(props.children.props)} />;
    }
    else {
        return <p {...props} />;
    }
};

export default function MarkdownRenderer(props: { src: string }) {
    const [markdown, setMarkdown] = React.useState<string>("");

    React.useEffect(() => {
        async function fetchMarkdown() {
            try {
                const response = await fetch(props.src);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${props.src}: ${response.status} ${response.statusText}`);
                }
                const text = await response.text();
                setMarkdown(text);
            } catch (error) {
                console.error('Error fetching markdown:', error);
            }
        }
        fetchMarkdown();
    }, [props.src]);

    return (
        <div className='page-width align-center mx-auto prose lg:prose-xl my-6 text-eggshell'>
            <Markdown remarkPlugins={[remarkGfm]} components={{ p: ImagesWithoutPTags }}>{markdown}</Markdown>
        </div>
    );
}