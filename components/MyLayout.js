const Layout = (props) => (
  <div className="layout">
    {props.children}
    <style jsx>{`
      .layout {
        // margin: 20 !important;
        // padding: 20;
      }
    `}</style>
  </div>
);

export default Layout;
