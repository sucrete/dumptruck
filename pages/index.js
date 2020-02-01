import Layout from "../components/MyLayout";
import TopFiles from "../components/TopFiles";

export default function Index() {
  return (
    <div className="app">
      <div className="landingHeader">
        <img
          className="guc"
          alt="logo for dumpTRUCK dump.fm gallery showcase"
          src="/dumpTRUCKlogo.svg"
        />
        <hr />
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt mauris dapibus leo hendrerit, eu malesuada ligula suscipit.
          Aenean ultrices euismod sapien, quis condimentum urna suscipit eu.
          Duis tempor rutrum mi non aliquet. Suspendisse diam eros, lacinia in
          nisl vel, luctus hendrerit purus. Morbi posuere lectus at libero
          iaculis lacinia congue non orci. Suspendisse augue dui, condimentum
          eget viverra non, fringilla non sapien. Etiam sem ipsum, pellentesque
          et magna ullamcorper, consectetur commodo sapien. Donec ante magna,
          varius in viverra nec, bibendum et ex. Sed semper a velit vitae
          vulputate. Proin mollis lectus at pretium vulputate. Etiam nec
          vehicula tellus. Quisque vulputate leo non enim ullamcorper cursus.
          Sed at laoreet massa. Sed sed metus tristique, pretium dolor quis,
          commodo elit. Suspendisse lobortis consectetur metus, sed porttitor
          nunc gravida nec. Vivamus euismod turpis a quam volutpat, nec molestie
          ex consectetur. Proin sed quam nunc. Proin convallis tincidunt ornare.
          Vivamus dictum velit a nisl porta tincidunt. Nullam mattis placerat
          volutpat. Nam vel justo porta, aliquam nibh nec, viverra libero.
          Pellentesque tellus mi, ultrices eu augue ac, laoreet aliquet orci.
          Integer vel tristique nisl. Donec sed facilisis mi, eu aliquam sem.
        </div>
      </div>
      <div className="topFilesContainer">
        <TopFiles />
      </div>

      <style jsx>{`
        .guc {
          width: 13%;
          margin-bottom: 10px;
          margin-top: 3px;
        }
        .landingHeader {
          background: #f8f8f8;
          padding-left: 20px;
          padding-top: 20px;
          padding-right: 20px;
        }
        .description {
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 15px;
          padding-bottom: 50px;
          width: 85%;
        }
        hr {
          margin: 0px 5px;
        }
        .topFilesContainer {
          margin-left: 3px;
          padding-top: 20px;
        }
        .app {
          margin: 10px;
          margin-top: 20px;
        }
        .top;
      `}</style>
    </div>
  );
}
