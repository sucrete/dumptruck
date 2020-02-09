import Dump from "../../components/Dump";
const sourceURLS = [
  "https://lh3.googleusercontent.com/V79m0G8C814tn-FFh-_fCTlIaT3EiGwkbwKCfln5h1DnXdC2op7D__j68C3J9TcqQYZ5uMwEtkJDZrhEJWZQMmdp1kMjosyvb_3LHTnoowUd5blf7CbpKFiT-LGxsVXSHw-Qjh9DSQmmxDDZxygRdRBTUcQRUHQBfzn0W1h1WpNY7YHlhbV9onhiJb_6REUn-MT0G-QE-K0FqTUutVE_4TdB1lEXQXv96srxOnoX6W_9rR6loHysXlVzthMqUhQsRH1Zqo0fJr-MhlFO2243GEYGceKJGs6bwnQZRJS_sC-sdR08klBiyptD9RB1UOLm4462dJmT7pNOxH0QvInPIOQcGVb2MuklyoW7MGWhta5J08iDpfzvrmcOpD7k_JOLDxozPKZJzEcZL4ZL23wP7Hsn-rQmLtsUJ658Nybnr2SRB_avLApdYIrE6elh9SpgXHMlBzjO2-EOg1KxvTmV539dXUMcbJBotOBd6T9mkx1vbaJXOrQNLeDJdvOjOXpV9pM3_CWhlkHl8wiqxFdkVTKSpiU6kDXuEpFFf0mNkDZjtMDP3jTHJEI_BUAY4rMsDp940oDrYwitLtyCMwL3JYSwAAGEOD5K1oGDQF9dJz4CossHSAGnMmHydNl5SIC_DAWqgr1cxi7NuiSFy0jFMLbPwaiosMmEWy1cYUXkU7yIyFKUB_0=w1440-h550-ft",
  "https://lh3.googleusercontent.com/-qJsi8rycXN4QKqg8WF3xnjKqcQm9cZXLVvhDsRnHC3ATMEQzZ4IMxo7bhevvMR3djsbqCZFF8qJY6kolgW0-OzMGfM5f33n0ro7LQNRnoL3Yim6Kh8t9L8Y-J-PcZxBM2L4F2DMslRkPjOlDcZNt7UpBpTh-Vga_5ciVOCLVmMZNs0UnInMfiOKQFeWTOD-Zzxj1ue0cllyFYfeorV3yHVQ99pm4_TfpHStZlbfFnJWNE_yzUCcrsRonagpT3fMENTFSnLAF6PJqlS6ie7g6ciwsMG5c7krO_ZWpzaXZBIy67ZYhwK-KbyL1NKsntiJ_CWl_cEidNnnQn0P6453NDrBOKo0Iqks8-RxnncMPHg-61KBH20bs-5Sf2lQuQArU8lqMCnhP8K_mkRDciznzgLNZbe20srMJCLbD9shknSv_JItc1HmVq1I0y91xfyO9qSOF9QoYNPRB9f05q9sI_jkuhBBVZvXRkT1fBLljS8DshyXaNEVyG6KxRkJL52kqsO88P-HyzjpuiQffgvp0xpUposx-K7-22JipY0nS2XrhTHnu4KHwO89UVVQBBEPT5mKLirgMYXAGg7OYNc2_B8ADuPbNtDC2nLQ43yOBFTlP4qE1ymR7SPVXRqZ_QJ3RsCEO3PY38Mh6m7LsBu9mfaXPYuEkFd34USPKD4lPl6Qfbkk1QE=w1440-h550-ft",
  "https://lh3.googleusercontent.com/4r90gQpzZL_tsZwSf2yuvndDCfgUA47WuP2OQQjupcYqaKD35xRqT97DVSWq7T8dHY37Y27Oxy5XCIkvfqnOaFKlT1rbB9IqD6NcQpwiFig4ZC3Mb-DANqntlpsPEGToZUCeJ_SgP0YxxNzaZMtTdZSJbcnLbr4rzrqc-7HGVOLtb0oX140voHTNPVq4x252F4NICvKk3NKJ2A-FJ76Hi2-rZ75c1GgQ5unHf_t5elBJaiTexml0oMnFjsfXdUdnwlFqxPz_1WrZ-mK-czSfYZodTEcprQFW8-epJssqzLjHbNUKSXoBvAHv_9H_G8VlgOAHSOv315Z7m_2b36CtoUcd-DJoQzhm82b0QHNbFLAMu32oMn0r3i8AFmZysSVzNog4TxMnCcz1H8nq2obzCv4D4H9nBx9qaVesgRy4mRvnYJFMVDllD-R2QjBnNNxUbTBJ6kfthYXA4HwzjwmI5wlQM99M4tx_eKPcQJnXf00EO2r0K2yCwegr3ZzZR05GT_vtB7mT6ZjTzydDfj8ezDqIw1u0X9xkhUySZZZTdBCDbuEsOTbfamSHsJzZfFTAgpqsujuY87DLW6kZQEBC0PPVM30Px8QtLHlUjWK9Pgw15nzWffacN5g_Hi-isFGxRs_E2-NA-QTT1iWsr0GRqjbHe-uFGYNVKbL0-7SXd8TF8n9PKso=w1440-h550-ft"
];
export default function GT8GWQLpkq() {
  return (
    <div>
      <Dump id="petrograd">
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
