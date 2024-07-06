import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      // state.items.push(action.payload);
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsReducer;
