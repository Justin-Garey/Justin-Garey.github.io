import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import React from 'react';
import { FaCopy } from "react-icons/fa6";

function MarkdownImageRenderer(props: any) {
    return (
        <div className="flex justify-center my-4">
            <img {...props} className="md-image-width" />
        </div>
    );
}

function HandlePTags(props: any) {
    if (!props.children) {
        return <p {...props} />;
    }
    else if (props.children.type && props.children.type == 'img') {
        return <MarkdownImageRenderer {...(props.children.props)} />;
    }
    else if (props.children.type && props.children.type === 'code' || 
             (Array.isArray(props.children) && props.children.some((child: any) => child?.type === 'code'))) {
        const modifiedChildren = React.Children.map(props.children, (child: any) => {
            if (child?.type === 'code' && typeof child.props.children === 'string') {
                return React.cloneElement(child, { ...child.props, className: 'bg-neutral-950/15 p-2 rounded' } );
            }
            return child;
        });
        return <p {...props}>{modifiedChildren}</p>;
    }
    else if (props.children && (props.children.type === 'span' && props.children.props?.className?.includes('katex')) ||
             (Array.isArray(props.children) && props.children.some((child: any) => child?.type === 'span' && child?.props?.className?.includes('katex')))) {
        return <p {...props} className="text-center" />;
    }
    else {
        return <p {...props} />;
    }
};

function HandlePreTags(props: any) {
    if (props.children && props.children.type === 'code') {
        const [copied, setCopied] = React.useState(false);
        
        const handleCopy = () => {
            const code = props.children.props.children;
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };
        
        return (
            <div className="relative group">
            <button 
                onClick={handleCopy}
                className="absolute top-2 right-2 px-3 py-1 bg-neutral-700 hover:bg-neutral-600 text-white rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? 'Copied!' : <FaCopy />}
            </button>
            <pre {...props} className='bg-eerie-black text-eggshell'>
                {React.cloneElement(props.children, { ...props.children.props, className: `${props.children.props.className || ''} whitespace-pre-wrap break-words` })}
            </pre>
            </div>
        );
    }
    return <pre {...props} />;
}

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
            <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: HandlePTags, pre: HandlePreTags }}>{markdown}</Markdown>
        </div>
    );
}