import Dump from "../../components/Dump";

export default function K6TwMr12He() {
  return (
    <div>
      <Dump id="pummp">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/K6TwMr12He--${index}.gif`}
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
