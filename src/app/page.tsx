import ChatTuAsesorNequi from './components/ChatTuAsesorNequi/ChatTuAsesorNequi';
import LandingInfo from './components/LandingInfo/LandingInfo';
import PhoneFrame from './components/PhoneFrame/PhoneFrame';

export default function Home() {
  return (
    <div>
      <PhoneFrame>
        <ChatTuAsesorNequi />
      </PhoneFrame>
      <LandingInfo />
    </div>
  );
}
