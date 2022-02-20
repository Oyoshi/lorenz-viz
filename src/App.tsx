import { useState } from "react";
import styled, {
  css,
  ThemeProps,
  Theme,
  ThemeProvider,
} from "styled-components";
import MathJax from "react-mathjax";
import { GlobalTheme } from "styles/GlobalTheme";
import { theme } from "styles/theme";
import { CoefficientsForm } from "components/coefficients-form";
import { ScatterPlot } from "components/scatter-plot";
import { solveRK4 } from "ode-solver/rk4";

type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>;
type InputsValues = Record<string, number>;

const LORENZ_EQUATIONS =
  "\\begin{aligned}\\frac{dx}{dt} &= \\sigma(y-x) \\\\\\frac{dy}{dt} &= x(\\rho - z) - y \\\\\\frac{dz}{dt} &= -\\beta z + xy\\end{aligned}";

const InputSection = styled.section(
  ({ theme }: ThemeProps<Theme>) => css`
    float: left;
    width: 700px;
    @media (max-width: ${theme.mediaQueries.large}) {
      display: block;
      width: 90vw;
    }
  `
);

const InfoWrapper = styled.div`
  padding: 24px;
  > h1 {
    text-align: center;
  }
`;

const ChartSection = styled.section(
  ({ theme }: ThemeProps<Theme>) => css`
    float: left;
    @media (max-width: ${theme.mediaQueries.large}) {
      display: block;
    }
  `
);

export const App = () => {
  const [coefficients, setCoefficients] = useState<InputsValues>({});
  const [traces, setTraces] = useState({});

  const handleInputChange: InputChangeEventHandler = (e) => {
    const target = e.currentTarget;
    setCoefficients({ ...coefficients, [target.name]: Number(target.value) });
  };

  const handleSubmit: FormSubmitEventHandler = (e) => {
    e.preventDefault();
    const x_fun = (x: number, y: number) => coefficients["sigma"] * (y - x);
    const y_fun = (x: number, y: number, z: number) =>
      x * (coefficients["rho"] - z) - y;
    const z_fun = (x: number, y: number, z: number) =>
      x * y - coefficients["beta"] * z;
    setTraces(solveRK4(x_fun, y_fun, z_fun));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <InputSection>
        <InfoWrapper>
          <h1>Lorenz System Visualization</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <MathJax.Provider>
            <MathJax.Node formula={LORENZ_EQUATIONS} />
          </MathJax.Provider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoWrapper>
        <CoefficientsForm
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </InputSection>
      <ChartSection>
        <ScatterPlot
          trace={[
            {
              ...traces,
              type: "scatter3d",
              mode: "lines",
              line: { color: "#0a11eb" },
            },
          ]}
        />
      </ChartSection>
    </ThemeProvider>
  );
};
