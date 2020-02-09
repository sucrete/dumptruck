import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/T1kOXtaR-HN6W_9UwMUNKntUA0KtraGIaV5bR-9iOlzo_jTOl6WTSZbN9hznyfxevl_9P0huYnQKpcvnB-HFtuICRlhC-zCiVmS5MAMgLLf2rVdsffIUS-d19L7W46G2aDzmoaVTweB2cA374OK0EaqfK6wbEr1VtVRRA9YYNuh57jOFTAnMQpDEkRgceAlb2P_2OuwYyxYdjvmRyCR9gPbz3irSYEpoPPaERUT_KDdOWvgs_6DiQ2VFZUEQomzI4Nfizvj85qJ9wDUTUnZaFMsdB8ilJAcsdTOHho8hGe_BUNK36B79liwE8j9BqtGAMWX6vM_q43UiusOBwoXG9177eM886emO4IpC4YuYT1etjYwi7akmaT0aQhcwjiTylIjvaQu47IM5iHhZkUTAkJvQmhBBepHNKfE0BOkZt9Rx3NkR6pmmli46L4gt9I3RnyNmZ4yiqwfY3hSwaajCLp45GeOOHEic36bUY6ug_CB5kp0f_hOqIkG3OWAdRC-_jSM91YP9cHZ8SUjrm9RBsWDOCpKy_niEPy6iu7_b0VVLAAlhB5HP-klNMZawibKJaAZIfS6YKORW8lVWPadA-3Egd6Q83Ds5p9RYw7FgcTRFSQ29mqRLhgdhOGARTUO4FVuOyMkwMvA0tt87xU8fvLMAun2xQvgIySzl5Gs4O_BZagR5oqo=w1440-h550-ft"
];
export default function ZHZuNl9gZN() {
  return (
    <div>
      <Dump id="melipone">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
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
