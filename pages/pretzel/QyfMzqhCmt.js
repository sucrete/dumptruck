import Dump from "../../components/Dump";

export default function QyfMzqhCmt() {
  return (
    <div>
      <Dump id="pretzel">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/QyfMzqhCmt--${index}.png`}
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
