import { Link } from 'react-router-dom';
import './CircleButton.css';

export default function CircleButton({ to, label, colorVar, delay = "0s" }) {
  const style = {
    backgroundColor: `color-mix(in srgb, var(${colorVar}) 35%, rgba(255, 255, 255, 0.3))`,
    animationDelay: delay,
  };

  return (
    <Link to={to} className="circle-button" style={style}>
      <span className="circle-button-text">{label}</span>
    </Link>
  );
}
