import Dump from "../../components/Dump";
const sourceURLS = ["https://i.ibb.co/CQYv1c0/Animation1.gif"];
export default function FJebePPjO6() {
  return (
    <div>
      <Dump id="plams">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
