import Dump from "../../components/Dump";
const sourceURLS = [
  "https://media.giphy.com/media/efTlWxsgSS7tWy84vZ/giphy.gif",
  "https://lh3.googleusercontent.com/l-A8RHwYRbs3lcvgY2IP9jSwdJlQVpstG3W6PLu9yQ1HkX40eOzoGDZIjaMlIwhpGROVtGEzZddAih8Jc5Nxb3OyGBuffm-S1dSjYVzF2JoGUfH7TSu4RQ2ZmqyHDuCTmitzGaFu03BH_jZ6ZnQxwX90dIoIleyTUpliWnCK0Ig8CftW_jGfaQTZB-wTjyBjV7F5fVr19ph-ERxuYT06nQ5GxzwY3d36MBahLTDmXHsc2vTXoriey53M3iUNf0Q8eHDhKLt2up3XWW1-MBAbV61eeEsEyAdWlOjSlQ6_9vaKacpJs5a4VJXfE4arjgpGgoQ1I0ZlKtxSCf59M6hXpfY4VRrrqw8xrzrDMTXH5bbaYZqTZ-BWMxX7wBeijFJG45du-2lEKK-8_bkgHmzCYeGkT7qKdYbjIsWQ-dRK63qDQnrzlmkuQF1MexpbyQCk_qTifMSFQssvwaORX2G0ACL8oZ8KD7asZPnJViMammvxv8oyvYLVSSZKqJEPIkkGcxaO1YfpfxcWsuzrLaDdBVuUqW2_j58SdlU0eBK55cwbj40yO5NaHTw6KyQW9KudEYP3mft9czZBo9osUsbEGqcG3LPujSuOFWhzyZnEERUU-KyxkfdBpa25ocEJmhC2nN-GV6ekT4s6z1350Jx47C-0lhptn-ZHXQf8XVGByzXv9ahdyeQ=w1440-h550-ft"
];
export default function eBR6ZJDQNu() {
  return (
    <div>
      <Dump id="pretzel">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-width: 425px;
        }
      `}</style>
    </div>
  );
}
