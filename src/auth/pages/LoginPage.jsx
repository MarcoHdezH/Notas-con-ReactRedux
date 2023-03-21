import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication,startGoogleSignIn } from "../../store/auth"
import { useDispatch } from "react-redux"

export const LoginPage = () => {
  
  const distpatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'marco7245@hotmail.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    distpatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    distpatch(startGoogleSignIn());
  }


  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="ejemplo@hotmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}>
            </TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            >
            </TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register"> Crear una Cuenta </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}