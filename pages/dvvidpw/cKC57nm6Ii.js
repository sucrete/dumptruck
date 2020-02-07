import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/P8RS-CX4QEP6l-hXf1ekdF3vSu0zB5cdQyKcQARpKFFtzGvnIdPRaNfT5v2XlqNC9MAxfmbIUDgXdEHs_VuDBn-OHOqJ8Ps9DKrclXRbbjOZNNrB1PfKGUb5UYaFMgxSvxCDMCBMwK_-mNumr2CgwQqO8AY5SdYi5_GLeyTW6YlRqH630PVRtvpRGrVkWqzoCJFj4EjyQN5w5Et29njM5fjIqY1I8yyjCfB4-prKc2jV3BemYYxH46IZrGHGwsd3eEFDwI8iWMhQqxSu_kXYje-DsASl6-LUeeh6mU4oIq5JYc44qtj0NZ3gohYBQrv_mZTtWLaJS4LcKvomhJj0nuq6YAmAqm5fKw-swXM3lZM36kmacbMQU9xq2jlBUga7sknJFr805GDFATpH6DNLZGRtmWZwV1AOX1I6y3YzWW78VV6gDEG92zLwwUAO5eurBfYxAqIUMcDRQohA8l-X7jHEUFXEc0iBTK0d9-xfW25A9tF99wukMiD_UVAHQSXsscpc4vsjtgMI7H1-jP5flMh1oyZs3zBCxi53Gd69a0JuKjIxjOzHSi2MLYejr9k-77Pye14xLKjHd8dm8vh0JBpZDjxLMNKMP5cBFpS6nofZpMIGLEKtFNAASn3AaNG44aegGdgB0etCUX0XEDSBwZK-6onJaFwJOtH5UT8obctHWv7N0YE=w1440-h550-ft",
  "https://lh3.googleusercontent.com/adFxMHrjQrFstveiX7PatG-isUZi1QrB-48vjaUArgPw93ZX2-KdV11BdT1r8DcjXScZsIiCM8tlnztqUtzSDJHoMw1uExje0QcVinKH6q22I8jzNiXj46oM_9Vdw87MkIGYtvd8JznURiE2nwOSSaPFHU1VJERh1Nnd2KXhjDHjlTl5eDFuhnY8se-YmzfIlnN4TCJcO7AFqWlFWPjFMIeNE2H2Wi_SnzqJXI0kvQzRvQ0MUqEeUK6K0K_JxV3rO-q0m9Z6YDn-VN-Md6QVPXVGgXpvajcZnP5H4VocpRy1DS59Oh927-8rO_GpH2GKEKdTynN0sjeW6b8RiyE3s13qjjAaBHfYMQIOrQH1bU89tef14mVoNZEEhvdR3P9fUL4Z4SX9oqI7bX4IkBFIZnhOhvhdoCGchJRlG3FR0QS0pp-SD2niFXU9JDtxKnjnBLkGIk2ZftWUOuOwaKSs4_ve2YC9dFL4hkrPtnMiM0g-a6R97aeQqEE9UShz-v66jHXc1XlccHhqu7QfsZa5sc7uYU2tl9FCcDeDTo0gCOQW3uIldDfHMSizWWkPoEwOgyQ5EQLttVteIqqs0WUGE7_LfseE3rvuqVWr85vGPV-_uCcL45w2nh-lUfCGf35xOoM1UQsVModErAwIjIEp9i-acnkRkrtaPHgGkIdRiNRoPofvHGI=w1440-h550-ft",
  "https://lh3.googleusercontent.com/P8RS-CX4QEP6l-hXf1ekdF3vSu0zB5cdQyKcQARpKFFtzGvnIdPRaNfT5v2XlqNC9MAxfmbIUDgXdEHs_VuDBn-OHOqJ8Ps9DKrclXRbbjOZNNrB1PfKGUb5UYaFMgxSvxCDMCBMwK_-mNumr2CgwQqO8AY5SdYi5_GLeyTW6YlRqH630PVRtvpRGrVkWqzoCJFj4EjyQN5w5Et29njM5fjIqY1I8yyjCfB4-prKc2jV3BemYYxH46IZrGHGwsd3eEFDwI8iWMhQqxSu_kXYje-DsASl6-LUeeh6mU4oIq5JYc44qtj0NZ3gohYBQrv_mZTtWLaJS4LcKvomhJj0nuq6YAmAqm5fKw-swXM3lZM36kmacbMQU9xq2jlBUga7sknJFr805GDFATpH6DNLZGRtmWZwV1AOX1I6y3YzWW78VV6gDEG92zLwwUAO5eurBfYxAqIUMcDRQohA8l-X7jHEUFXEc0iBTK0d9-xfW25A9tF99wukMiD_UVAHQSXsscpc4vsjtgMI7H1-jP5flMh1oyZs3zBCxi53Gd69a0JuKjIxjOzHSi2MLYejr9k-77Pye14xLKjHd8dm8vh0JBpZDjxLMNKMP5cBFpS6nofZpMIGLEKtFNAASn3AaNG44aegGdgB0etCUX0XEDSBwZK-6onJaFwJOtH5UT8obctHWv7N0YE=w1440-h550-ft"
];
export default function cKC57nm6Ii() {
  return (
    <div>
      <Dump id="dvvidpw">
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
