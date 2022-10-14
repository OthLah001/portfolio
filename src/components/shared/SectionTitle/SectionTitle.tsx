import './SectionTitle.scss';

export default function SectionTitle({ title }: {title: string;}) {

  return (
    <h2 className="section-title">{title}</h2>
  )
}