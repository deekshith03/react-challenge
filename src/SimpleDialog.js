import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Are you sure you want to delete?</DialogTitle>
      
    </Dialog>
  );
}