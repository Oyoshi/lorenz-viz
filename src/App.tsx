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
    @media only screen and (max-width: ${theme.mediaQueries.large}px) {
      float: none;
      display: block;
      width: 95vw;
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
    @@media only screen and (max-width: ${theme.mediaQueries.large}px) {
      float: none;
    }
  `
);

const Anchor = styled.a(
  ({ theme }: ThemeProps<Theme>) => css`
    text-decoration: none;
    color: ${theme.colors.accent.background};
    font-weight: ${theme.font.weights.bold};
    transition: ${theme.transition}ms;

    :hover {
      color: ${theme.colors.effect.background};
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
      <MathJax.Provider>
        <GlobalTheme />
        <InputSection>
          <InfoWrapper>
            <h1>Lorenz System Visualization</h1>
            <p>
              The Lorenz system is a system of ordinary differential equations
              (ODEs). The equations relate the properties of a two-dimensional
              fluid layer uniformly warmed from below and cooled from above.
            </p>
            <MathJax.Node formula={LORENZ_EQUATIONS} />
            <p>
              What is interesting about them is the behaviour of the solution
              depending on the system parameters: &sigma;, &rho;, and &beta;.
              For the{" "}
              <MathJax.Node
                inline
                formula={"\\sigma = 10, \\rho = 28, \\beta = \\frac{8}{3}"}
              />{" "}
              parameters values the system behaves in a chaotic way. What you
              can see is called Lorenz Atractor. Runge-Kutta numerical method is
              being to calculate the solution for the Lorenz System. If you're
              interested on the subject you can read more about it{" "}
              <Anchor href="https://www.cfm.brown.edu/people/dobrush/am34/Mathematica/ch3/lorenz.html">
                here
              </Anchor>{" "}
              and{" "}
              <Anchor href="https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods">
                here
              </Anchor>
              .
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
      </MathJax.Provider>
    </ThemeProvider>
  );
};
