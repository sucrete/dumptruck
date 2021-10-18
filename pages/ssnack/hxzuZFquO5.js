import Dump from "../../components/Dump";

export default function hxzuZFquO5() {
  return (
    <div>
      <Dump id="ssnack">
        {new Array(3).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/hxzuZFquO5--${index}.gif`}
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
