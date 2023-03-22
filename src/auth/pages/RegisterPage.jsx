import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  email: 'Marco7245@hotmail.com',
  password:'123456',
  displayName: 'Marco Hernandez'
}

const formValidations = {
  email: [ (value)=> value.includes('@'),'El correo debe tener un @'],
  password: [ (value)=> value.length>=6,'La contraseña debe tener mas de 6 letras'],
  displayName: [ (value)=> value.length>=1,'El nombre es Obligatorio'],
}
export const RegisterPage = () => {

  const { displayName, email, password, onInputChange,formState,isFormValid,emailValid,passwordValid,displayNameValid } = useForm(formData,formValidations);

  console.log(displayNameValid);

  const onSubmit = ( event )=>{
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre(s)"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !displayNameValid }
              helperText={displayNameValid}>
            </TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ejemplo@hotmail.com"
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
              onChange={onInputChange}>
            </TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una Cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login"> Ingresar </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}