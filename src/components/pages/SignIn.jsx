import React, { useState, useEffect } from "react";
import AuthenticationPage from "./AuthenticationPage";
import { useForm, Controller } from "react-hook-form";
import { Field } from "../Field";
import Buttonn from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import IconEyeClose from "../Icon/IconEyeClose";
import IconEyeOpen from "../Icon/IconEyeOpen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Firebase-config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const schema = yup.object({
  email: yup
    .string()
    .email("pls enter your email")
    .required("pls enter your email address"),
  password: yup
    .string()
    .min(8, "your password must be at least 8 character")
    .required("pls enter your passwords"),
});

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  useEffect(() => {
    document.title ="Login Page"
    if (!userInfo || !userInfo.email) navigate("/sign-in");
    else navigate("/");
  }, [userInfo, navigate]);
  const handleSignIn = async (value) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, value.email, value.password);
    navigate("/");
  };
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <label htmlFor="email">Email Address</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                placeholder="Enter your email address"
                {...field}
                value={field.value || ""} // fix chỗ này
              />
            )}
          />
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
          <Controller
  name="password"
  control={control}
  render={({ field }) => (
    <input
      {...field}
      type={togglePassword ? "text" : "password"}
      placeholder="Enter your password"
      value={field.value || ""}   // fix chỗ này
    />
  )}
/>

            {!togglePassword ? (
              <IconEyeClose
                className="icon-eye"
                onClick={() => setTogglePassword(true)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            ) : (
              <IconEyeOpen
                className="icon-eye"
                onClick={() => setTogglePassword(false)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </Field>

        <Buttonn type="submit" disabled={loading}>
          {loading ? <span>Loading...</span> : "SignUp"}
        </Buttonn>
      </form>
    </AuthenticationPage>
  );
};

export default SignIn;
