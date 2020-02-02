const ArtistBody = props => (
  <div className="artistBody">
    <div className="directoryHeader">
      <img className="iconImg" src="/Folder-icon.png" />
    </div>

    {props.children}

    <style jsx>{`
      .artistBody {
        margin-top: 25px;
        margin-left: 5px;
        max-width: 500px;
        margin-right: 5px;
      }
      .directoryHeader {
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        padding-left: 5px;
        height: 35px;
        position: relative;
      }
      .iconImg {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    `}</style>
  </div>
);

export default ArtistBody;
