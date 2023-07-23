import StepProgress from "./step/StepProgress";
import StepOne from "./step/StepOne";
import ProgressControl from "./step/ProgressControl";
import Cart from "./cart/Cart";
import './MainContainer.css'

export default function MainContainer() {
  return (
    <div className="main-container">
      <div className="step">
          <StepProgress />
          <StepOne />
          <ProgressControl />
      </div>
      <div className="cart">
      <Cart />
      </div>
    </div>
    
  )
}