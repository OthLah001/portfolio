import './Loading.scss';

export default function Loading() {
  setTimeout(() => {
    document.querySelector("body")?.classList.add("loaded")
  },  2000);

  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
  
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  )
}