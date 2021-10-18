import Dump from "../../components/Dump";

export default function K6TwMr12He() {
  return (
    <div>
      <Dump id="pretzel">
        {new Array(5).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/K6TwMr12He--${index}.png`}
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
