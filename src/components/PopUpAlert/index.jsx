import {Alert, Snackbar} from "@mui/material";

export default function PopUpAlert({message, severity, onClose}) {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
    >
      <Alert onClose={onClose} severity={severity} sx={{width: "100%"}}>
        {message}
      </Alert>
    </Snackbar>
  );
}
