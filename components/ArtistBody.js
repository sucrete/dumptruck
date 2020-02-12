const ArtistBody = props => (
  <div className="artistBody">
    <div className="directoryHeader">
      <img className="iconImg" src="/Folder-icon.png" />
      <span className="directoryTitle">{props.artist}</span>
    </div>

    {props.children}

    <style jsx>{`
      .artistBody {
        margin-top: 25px;
        margin-left: 5px;
        max-width: 600px;
        margin-right: 5px;
      }
      .directoryHeader {
        font-family: "Work Sans";
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        padding-left: 5px;
        height: 40px;
        position: relative;
        vertical-align: middle:
      }
      .directoryTitle {
        color: #484848;
        position: absolute;
        top: 50%;
        left: 35px;
        transform: translatey(-50%);
      }
      .iconImg {
        position: relative;
        height: 24px;
        top: 50%;
        transform: translateY(-50%);
      }
      
    `}</style>
  </div>
);

export default ArtistBody;
