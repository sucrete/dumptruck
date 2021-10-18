import Dump from "../../components/Dump";

export default function drXm8bldsB() {
  return (
    <div>
      <Dump id="pretzel">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/drXm8bldsB--${index}.jpg`}
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
