import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/IXmd7NvB2Tz-VHGIETiYVYBC5zpoI6PlhFTej_WoEQxj-BKfwZvJ_LvX8BRc8AWTKFMpXgrmv6o38XT0Daj8MMjQja1wQ-LQZx61DXrxmiwm6ubOnT55y86ivBgupkgYycK37eKDvOlgm5jhw-TZYW5RZdTiavBAbjdNO_2i5b-FRjw5klJCph0YeA7lZEVPgRQ_cN4GBEB0g_DwMntMGLwHNnUXClckaGKoTQ9K9yziVqmT7vwuo_u6i1vcYXjLPkClEccKBK7KC_rfM5LkCJhWqjwBaRH22kR08xtJ-tIiyIPBzwdM5_2xmwHrl9bIcxVJ5cA7po1AGda_8LhMngRZgv3Slf74TIkTXI_h6vtSEtd-CBB9l-4az373V9gOstNdwq5RIQ4DrTuGohcwbTjIoegAP3kl_8fP5R-jtEXzJRoJIm1ckAHYinjmwlaPjlLmguqMdN4frlS62AxgooOL1puS6P5Q5xVYQvInSk_ftf-VQgLKxz0IjmNMUGJxO_Qa8lYzsPfedGeHIZ8uYAJXEGPTdUaQxbkUELKf3tcCZM9zllgvL1L2Pjpo6024qsRHq2LR8Z3hjhjnW38KhLIcDY80twh5WtRy9jjc1Z1D2TwkEw4jiFGt6wZW3UggmaHj_eLUGPHrbK3WUSBI--6Rl2lwbfVOZOmpInMSdpYk0sBcxyg=w1440-h479-ft"
];
export default function FDDGLaTJpX() {
  return (
    <div>
      <Dump id="kiptok">
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
