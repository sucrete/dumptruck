import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/gzVdVntu5c3sGLiZ4-xp2WAknbmLWfoIX7XjHzqyukJB-Rri8jnRLCowjvbACk-Vjsw383vb0x5sXRC6GZHdHyiVY7tmpeFEylrwHHlt51GT7O-a8hJxdVBme7v2_w0o4vyauWqkdhMCNOtCZH7E7FJRXGSTr_jl2kapeseXVtPUMrEZawmNxD_MmtUuby-r2Ul4fplHg8AYU402atL5YGZ17IEnY0NyaSSk_Gady7w2g5hmeYSwbKJrHiJJB6OU_7MMeUKNS6U3_FD4NfJ4nAZzavGBIIoyluN6PtiBYeX1Vf3_Fh_outg-E_C-CdnggxrMpgkjPNtguH_Ko6AFyMVACwhCq31-_VwOZcfnac-AyoKoUVFJJLgbE28ZHD9n-zQ9ze3j1E6xkL_26lW6YqkNRazQjJVsGvCh9YHU160zQHZtMz_uiMOvT7PpCHtSg5sYMyjeLqwsSdvgf4fVYmvfCXQID_CfxjnikEkHbtUnVkSzFVuDrwrHx0jd5gHO1kMavOWzetTNEBmf1viisPuvx9Of-F1eTX0QkjAltlzVTBdrNDY_-KXxBWZgxDbivATBFG62N_H3Oxbc-8nPoCll6NxThjqrDqtBKEsa1n3h9q6HB1YV1E-kgBCtFiJcYOkU2puhrJv02E8s-TXyTHOux8tdsutnwhMMZJ3ZXBVJMAipQt0=w1440-h550-ft"
];
export default function VTf5HLHK8S() {
  return (
    <div>
      <Dump id="grass">
        {sourceURLS.map(url => (
          <img className="workComponent" src={url} />
        ))}
      </Dump>
      <style jsx>{`
        .workComponent {
          max-height: 400px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
