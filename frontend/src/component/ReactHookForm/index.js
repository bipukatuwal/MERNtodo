import React, { useState } from "react";
import { useStyles } from "./style";
import { TextField } from "@material-ui/core";
import { Card, CardContent, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const ReactHookForm = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //register use for registering input, handlesubmit calls on form submit
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <h1 className={classes.header}>React Hook Form</h1>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter your first name"
                  id="standard-basic"
                  variant="outlined"
                  className={classes.inputField}
                  name="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                    maxLength: 20,
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter your last name"
                  id="standard-basic"
                  variant="outlined"
                  className={classes.inputField}
                  {...register("lastName", {
                    required: "Last name is required",
                    maxLength: 20,
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter your Email Address"
                  id="standard-basic"
                  variant="outlined"
                  className={classes.inputField}
                  {...register("email", {
                    required: "Email Address is required",
                    maxLength: 20,
                  })}
                  error={!!errors.emailAddress}
                  helperText={errors.emailAddress?.message}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter your phone number"
                  id="standard-basic"
                  variant="outlined"
                  className={classes.inputField}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    maxLength: 20,
                  })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="date"
                  type="date"
                  variant="outlined"
                  defaultValue="2017-05-24"
                  {...register("datepicker")}
                  className={classes.inputField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <FormControl>
                  <FormLabel>Choose your Gender</FormLabel>
                  <RadioGroup row name="gender1">
                    <FormControlLabel
                      value="female"
                      control={<Radio {...register("female")} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio {...register("male")} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio {...register("other")} />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid xs={12} item>
                <Button
                  type="submit"
                  /* onClick={handleClick} */
                  id="submitbtn"
                  className={classes.btnSubmit}
                  variant="contained"
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default ReactHookForm;
