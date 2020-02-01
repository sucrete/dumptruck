import Marquee from "../components/Marquee";
import Body from "../components/ArtistBody";

export default function Kiptok() {
  return (
    <div className="page">
      <Marquee>
        <div className="profile">PROFILE</div>
        <div className="header">kiptok</div>
      </Marquee>
      <Body></Body>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        .profile {
          font-family: "Work Sans";
          font-size: 77%;
        }
        .page {
          margin: 10px;
          margin-top: 20px;
          padding-bottom: 100px;
        }
        .header {
          font-size: 3em;
          position: relative;
          margin-top: 6px;
          left: -3px;
          padding-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
