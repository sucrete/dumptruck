import Dump from "../../components/Dump";

export default function PAfU7tMyuP() {
  return (
    <div>
      <Dump id="sol">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/PAfU7tMyuP--${index}.gif`}
            key={index}
          />
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
