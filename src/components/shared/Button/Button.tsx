import './Button.scss';

export default function Button(
  {text, href}: {text: string, href?: string}
) {
  return (
    <>
      {
        href ? <a className="ol-button" href={href} target="_blank">{text}</a> : <button className="ol-button">{text}</button>
      }
    </>
  )
}