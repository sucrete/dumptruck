import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/KNhOJxdkh_Jizwg6AaY2DaPfYAxEvgKCVhFZN9ZTUZ0Qpyv5-mMnKRe7AsNwvsTM2pAXruuVYdiJH6DAu_BUODkXLTG4a9d_OH37q83O67Bj5ss1cvx7EnZupP7yM-TsKNFP8r_i-upWKw7UxhYFRAs7dWHeoBp2wPjePqBvNVvCyCXxqnrFBt_gTQ7PRIUx6048JjGmsU4CbrnzbbCE3sqRlse0rEcywXfB1YynsIvrJWkNwIAyJ3PBl2glkk8nrFQ6-vIZKuRjLFyEbRHFnkJl4LgRltR_mSAQm_I9MN0yTUety5Vs5BBtEWYh1AQjy8n-KaxcDaqYbTFu0a3gELbjPvN0WDVsszMbw1799Fbe6bhPvodtXGCWRJ-o1eHqc-3Wv0rgUJ83_IwrH8wKHF4vwMClbKLrrUMRKfW--taTMCXBM44GEJrMBwllDiGJVCXFyW3mWGnsjuzZYaYOVByFFkVM6J07NOKIRH1QmFChVY-oHoQIDaewynZuipPoBch0lLxlwnvy9urA1bMEwR-35r6bQIkji2AWQFqI76ijfY3Ec00vtTKuhy6jyWRyrK2kghpYuom9Sk8zeX9vsfwgT-o66PidnWCseFkloZw-r7SyWlX6Z6gv9Xqjo2PWv4YiXN1MaLxM4Mhy8SxXDoX2cgUp_L3_iinekVakybbjAMbWWLw=w1440-h501-ft",
  "https://lh3.googleusercontent.com/8KlPZuKcUJJ9dFQ38ccUrZgB15zxuFkDMGdL03d_Lev6evf8Erc0a5Skx5YdKHiItJvdibk2WC7eHsxf_Z3EGvqZde-Y4z-jYAOn6SdMzUmYWfOzItfOVZvOB8IyyYNkVYFO68RjGlxQoAQEMdWrouvt-cKFZscZayJicQa0j0c9cbg1JCFBoaPMW_EpiZHMNTx4vxK-3aSSgRPMOYTUffXrMyFu64P3kRKFBXEk5FDl9KXnT7pEvhwjuvTxGzOw_FHDrVgyQNb9NyWiGnm6jsxs850hmBECUJKEXQbO09SjafBlGntSv8VF9hJZ9I1ipY6sBuXdg7QPirWysPjJJlwnanHKONekthICx1GPWv31TvEeGPSWYn0zBUwsrHaYAlt9LImod0mQqr_aQ9BoqjxHkZqR-Z40WW7SNFM9OvLhylrfi-drA3egXwJOR47F1WrtPY4SGpsJ8vV-Lo3jgxcQvdoifshAtOM1i1vqpBrstx1n_gFFR930UbhT1zQRBWTFUoMp6F_nyvvxaZhoFPzZ3L43JImOYhr0Mw4hm4zNWciwSSrFMEe8U1k-i50qwwEu30qnWY5ohoN6j9xKzzKj-LvOw6-bPhCuVIAYgX3G1B0-xqje5jV94fALv50shniU4i39eXelU2a5Kr_RzvENlyTQGBDolY_4p9q29YaqLRRFzfk=w1440-h550-ft"
];
export default function QyfMzqhCmt() {
  return (
    <div>
      <Dump id="pretzel">
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
