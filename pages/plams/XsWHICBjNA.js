import Dump from "../../components/Dump";

export default function XsWHICBjNA() {
  return (
    <div>
      <Dump id="plams">
        {new Array(2).fill(0).map((url, index) => (
          <img
            className="workComponent"
            src={`/XsWHICBjNA--${index}.gif`}
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
