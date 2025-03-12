import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData };

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    udpateUser: (state, action) => {
      state.value.map((user) => {
        //iterate the  array and compare the email with the email from the payload

        if (user.email === action.payload.email) {
          user.name = action.payload.name;

          user.password = action.payload.password;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions; //export the function

export default userSlice.reducer;
