import Dump from "../../components/Dump";
const sourceURLS = [0, 1];
export default function AqONlxtFid() {
  return (
    <div>
      <Dump id="ice">
        {sourceURLS.map((index) => (
          <img
            className="workComponent"
            src={`/AqONlxtFid--${index}.gif`}
            key={index}
          />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
