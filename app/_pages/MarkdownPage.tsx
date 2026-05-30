import MarkdownRenderer from '../_components/MarkdownRenderer';
import Footer from '../_components/Footer';

export default function MarkdownPage(props: { src: string; config: any }) {
  return (
    <div className="bg-primary py-4 px-3 min-h-screen flex flex-col text-secondary">
        <MarkdownRenderer src={props.src} />
        <Footer config={props.config} />
    </div>
  );
}