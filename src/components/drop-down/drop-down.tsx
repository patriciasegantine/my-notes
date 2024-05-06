import React from 'react';
import { Dialog, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { RiShutDownLine } from "react-icons/ri";
import { Logout } from "../header/header.styles.ts";

interface IDropDown {
  open: boolean
  onClose: (value: string) => void
  selectedValue?: string
}

export const DropDown: React.FC<IDropDown> = ({open, onClose}) => {
  
  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  
  return (
    <Dialog onClose={onClose} open={open}>
      <ListItem>
        <ListItemButton
          autoFocus
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemText primary="Profile"/>
        </ListItemButton>
      </ListItem>
      
      <ListItem>
        <ListItemButton
          autoFocus
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemText primary="Add account"/>
        </ListItemButton>
      </ListItem>
      
      <ListItem>
        <ListItemButton
          autoFocus
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemText primary={
            <Logout>
              <RiShutDownLine/>
            </Logout>}/>
        </ListItemButton>
      </ListItem>
    </Dialog>
  );
};
