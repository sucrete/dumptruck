import Dump from "../../components/Dump";
const sourceURLS = [
  "ufOjxN2MHY--0.jpeg",
  "ufOjxN2MHY--1.jpeg",
  "ufOjxN2MHY--0.jpeg",
];
export default function ufOjxN2MHY() {
  return (
    <div>
      <Dump id="1800dogcig">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={`/${url}`} key={index} />
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
