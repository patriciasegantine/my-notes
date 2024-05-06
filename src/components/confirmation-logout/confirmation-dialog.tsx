import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

interface Interface {
  title: string
  description: string
  okText: string
  onOK: () => void
  cancelText?: string
  onCancel: () => void
  open: boolean
  setOpen: React.Dispatch<boolean>
}

export const ConfirmationDialog: React.FC<Interface> = (
  {
    title,
    description,
    onOK,
    okText,
    onCancel,
    cancelText = 'cancel',
    open,
    setOpen
  }) => {
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={onOK} autoFocus>
            {okText}
          </Button>
          
          <Button onClick={onCancel}>
            {cancelText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
