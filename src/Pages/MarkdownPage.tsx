import MarkdownRenderer from '../Components/MarkdownRenderer';
import Footer from '../Components/Footer';

export default function MarkdownPage(props: { src: string }) {
  return (
    <div className="bg-primary py-4 px-3 min-h-screen flex flex-col text-secondary">
        <MarkdownRenderer src={props.src} />
        <Footer />
    </div>
  );
}