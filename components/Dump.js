const Dump = props => (
  <div className="workContainer">
    <span className="artistName">
      {props.id}
      <img className="dumpHeart" src="/piskel.svg" />
    </span>
    {props.children}
    <style jsx>{`
      .artistName {
        font-family: "Helvetica Neue", sans-serif;
        font-size: 0.8em;
        font-weight: 500;
        padding-right: 20px;
        margin-right: 10px;
        position: relative;
      }
      .dumpHeart {
        position: absolute;
        top: 35%;
        width: 7px;
        right: 8px;
        transform: translatey(-60%);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
      span.artistName img.dumpHeart:hover {
        width: 13px;
      }
      .workContainer {
        margin-top: 20px;
      }
    `}</style>
  </div>
);
export default Dump;
