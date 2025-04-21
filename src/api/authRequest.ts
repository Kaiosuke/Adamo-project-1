import { auth, facebookProvider } from "@/firebase/firebase";
import { IAuth } from "@/interfaces/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";

const login = createAsyncThunk<
  IAuth,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const token = await user.getIdToken();

    Cookies.set("accessToken", token);

    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue("Email or password is not correct");
    }
    return rejectWithValue("Login failed");
  }
});

const loginByFb = createAsyncThunk<IAuth, void, { rejectValue: string }>(
  "auth/loginByFb",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      const token = await user.getIdToken();

      Cookies.set("accessToken", token);

      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      };
    } catch (error) {
      if (error instanceof FirebaseError) {
        return rejectWithValue("Change Password failure!");
      }
      return rejectWithValue("Login failed");
    }
  }
);

const register = createAsyncThunk<
  void,
  { email: string; password: string; firstName: string; lastName: string },
  { rejectValue: string }
>(
  "auth/register",
  async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        return rejectWithValue("Email already in use");
      }
      return rejectWithValue("Login failed");
    }
  }
);

const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      Cookies.remove("accessToken");
    } catch (error) {
      if (error instanceof FirebaseError) {
        return rejectWithValue("Logout failure!");
      }
      return rejectWithValue("Login failed");
    }
  }
);

const forgotPassword = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("auth/forgotPassword", async (email, { rejectWithValue }) => {
  try {
    await sendPasswordResetEmail(auth, email);

    return "Reset password email sent successfully!";
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue("Forgot Password failure!");
    }
    return rejectWithValue("Login failed");
  }
});

const newPassword = createAsyncThunk<
  string,
  { oobCode: string; newPassword: string },
  { rejectValue: string }
>("auth/newPassword", async ({ oobCode, newPassword }, { rejectWithValue }) => {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    return "Password reset successfully!";
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue("Change Password failure!");
    }
    return rejectWithValue("Login failed");
  }
});

const changePassword = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("auth/changePassword", async (newPassword, { rejectWithValue }) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      return rejectWithValue("Bạn chưa đăng nhập");
    }

    await updatePassword(user, newPassword);
    return "Change password successfully";
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue("Change Password failure!");
    }
    return rejectWithValue("Login failed");
  }
});

export {
  newPassword,
  forgotPassword,
  login,
  loginByFb,
  logout,
  register,
  changePassword,
};
