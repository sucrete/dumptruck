const Dump = props => (
  <div className="workContainer">
    <section>
      {props.id}
      <img src="/heart.svg" />
    </section>
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
