import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/4Itvxu7LfP2DcNolCV-uVJYuT2LNn1kufUeq4E1_y5T_mHcPTVium6DNPQ36X0OqN2mXELCj7CI0lupYcohlapMDR0QL1iEw2bOoo2tmSfM5ikuUaSTvMq3___2NtPS_IXtPuu5iNdkjifoe8yOPuWR1ahu2mhNvaYkDBjSBx3f6qMQfsW8dJydPtbaYiFvXGkPZXCGwIaEqNXFs6-kkxzWHYbgunVhY1QItqofx1HZiZ1Mq59iZoB-SJTudOkFGuy5sGLE-JjJnMP6YyyetO5vlvIbh7CFdgrzOEusNA_wPXObh0a89AA6ZDTBqZdrIvqJYLHesQP2tUKs8AWu_4YgQUWzkdg6AOdu9_z-SYkfbcIbaxww8ZvzDXUQcfk-UIrnmSheu0WB674hcRNKhWND1tVR8ZjMAB3Y_dJ9kkU4IGSUTN3bfBOP08ioeu2m03KUGn9i0V9LIT4XXYNPaTVVzPUoul52C0Ut-RMe8R4utYcMBvJacdgN49-53A8ndV9C16Vvi6yRuoI8KtUW7511xwjPEjvq8H1ivwbVH1wdPXmiWlRQFwC7nuzVo0ubaIHrH1GTQLYknOv27hYwIwsfRYH3dA1rSiWG37zmGCL0IUDaVsj0ppcNbeU0j3DoOivdA57XPJqztqLRtlOIK52nksJiUIpe8FRdfalPORZMdds1pfHw=w1440-h479-ft"
];
export default function IlPsrHIURg() {
  return (
    <div>
      <Dump id="maxlabor">
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
