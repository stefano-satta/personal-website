import DOMPurify from 'isomorphic-dompurify';

interface SubtitleSectionProps {
    subtitle: string;
}

const SubtitleSection = ({subtitle}: SubtitleSectionProps) => {

    return (
        <p className="fs-4 mb-3"
           dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(subtitle)}}/>
    )
}

export default SubtitleSection;

