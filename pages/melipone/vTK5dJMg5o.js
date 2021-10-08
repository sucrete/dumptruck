import Dump from "../../components/Dump";
const sourceURLS = ["/vTK5dJMg5o--0.gif", "/vTK5dJMg5o--1.jpg"];
export default function vTK5dJMg5o() {
  return (
    <div>
      <Dump id="melipone">
        {sourceURLS.map((url, index) => (
          <img className="workComponent" src={url} key={index} />
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
