import Dump from "../../components/Dump";

export default function GLv5h5HUqp() {
  return (
    <div>
      <Dump id="polymer">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/GLv5h5HUqp--${index}.gif`}
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
