import MyImage from '../../assets/images/my-image.png';
import './PersonalImage.scss';

export default function Home() {
  return (
    <div className="image-container">
      <img src={MyImage} alt="My personal image"/>
    </div>
  )
}