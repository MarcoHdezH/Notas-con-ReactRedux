import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth"

const formData = {
  email: '',
  password:'',
  displayName: ''
}

const formValidations = {
  email: [ (value)=> value.includes('@'),'El correo debe tener un @'],
  password: [ (value)=> value.length>=6,'La contraseña debe tener mas de 6 letras'],
  displayName: [ (value)=> value.length>=1,'El nombre es Obligatorio'],
}
export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted,setFormSubmitted] = useState();

  const {status,errorMessage} = useSelector( state=> state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking',[status]);

  const { displayName, email, password, onInputChange,formState,isFormValid,emailValid,passwordValid,displayNameValid } = useForm(formData,formValidations);

  const onSubmit = ( event )=>{
    event.preventDefault();
    setFormSubmitted(true);
    if( !isFormValid ) return 

    dispatch(startCreatingUserWithEmailPassword(formState));
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
              error={ !!displayNameValid && formSubmitted }
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
              onChange={onInputChange}
              error={ !!emailValid && formSubmitted}
              helperText={emailValid}>
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
              error={ !!passwordValid && formSubmitted }
              helperText={passwordValid}>
            </TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid display={ !!errorMessage ? '' : 'none'} item xs={12}>
             <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" disabled={isCheckingAuthentication}  fullWidth>
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