const Dump = props => (
  <div className="workContainer">
    <span>
      {props.id}
      <img src="/heart.svg" />
    </span>
    {props.children}
    <style jsx>{`
      .workComponent {
      }
      .workContainer {
      }
    `}</style>
  </div>
);
export default Dump;
