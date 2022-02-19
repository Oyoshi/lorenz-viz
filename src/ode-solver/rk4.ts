type ODE = (...params: number[]) => number;

// Runge-Kutta algorithm specialized to numerically solve Lorenz ODE system
// Intead of implementing generic algorithm (like Matlab) and complicate it I stayed with specific and imperative approach
export const solveRK4 = (
  x_fun: ODE,
  y_fun: ODE,
  z_fun: ODE,
  x0 = 1,
  y0 = 0.5,
  z0 = 1,
  h = 0.01,
  max = 100
) => {
  const steps = max / h;

  const x_sol = Array(steps).fill(x0);
  const y_sol = Array(steps).fill(y0);
  const z_sol = Array(steps).fill(z0);

  for (let i = 1; i < steps; i++) {
    var k1x = x_fun(x_sol[i - 1], y_sol[i - 1]);
    var k1y = y_fun(x_sol[i - 1], y_sol[i - 1], z_sol[i - 1]);
    var k1z = z_fun(x_sol[i - 1], y_sol[i - 1], z_sol[i - 1]);
    var k2x = x_fun(x_sol[i - 1] + (h * k1x) / 2, y_sol[i - 1] + (h * k1y) / 2);
    var k2y = y_fun(
      x_sol[i - 1] + (h * k1x) / 2,
      y_sol[i - 1] + (h * k1y) / 2,
      z_sol[i - 1] + (h * k1z) / 2
    );
    var k2z = z_fun(
      x_sol[i - 1] + (h * k1x) / 2,
      y_sol[i - 1] + (h * k1y) / 2,
      z_sol[i - 1] + (h * k1z) / 2
    );
    var k3x = x_fun(x_sol[i - 1] + (h * k2x) / 2, y_sol[i - 1] + (h * k2y) / 2);
    var k3y = y_fun(
      x_sol[i - 1] + (h * k2x) / 2,
      y_sol[i - 1] + (h * k2y) / 2,
      z_sol[i - 1] + (h * k2z) / 2
    );
    var k3z = z_fun(
      x_sol[i - 1] + (h * k2x) / 2,
      y_sol[i - 1] + (h * k2y) / 2,
      z_sol[i - 1] + (h * k2z) / 2
    );
    var k4x = x_fun(x_sol[i - 1] + h * k3x, y_sol[i - 1] + h * k3y);
    var k4y = y_fun(
      x_sol[i - 1] + h * k3x,
      y_sol[i - 1] + h * k3y,
      z_sol[i - 1] + h * k3z
    );
    var k4z = z_fun(
      x_sol[i - 1] + h * k3x,
      y_sol[i - 1] + h * k3y,
      z_sol[i - 1] + h * k3z
    );
    x_sol[i] = x_sol[i - 1] + (1 / 6) * h * (k1x + 2 * k2x + 2 * k3x + k4x);
    y_sol[i] = y_sol[i - 1] + (1 / 6) * h * (k1y + 2 * k2y + 2 * k3y + k4y);
    z_sol[i] = z_sol[i - 1] + (1 / 6) * h * (k1z + 2 * k2z + 2 * k3z + k4z);
  }

  return { x: x_sol, y: y_sol, z: z_sol };
};
