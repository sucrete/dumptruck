import Dump from "../../components/Dump";
const sourceURLS = ["/c4VkK0rIVe--0.jpeg", "/c4VkK0rIVe--1.png"];
export default function c4VkK0rIVe() {
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
