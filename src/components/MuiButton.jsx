import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
// import {default as DeleteIcon} from '@mui/icons-material/Delete'
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Button variant="text" size="small">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>

      <ButtonGroup
        variant="text"
        orientation="vertical"
        size="small"
        color="secondary"
        aria-label="alignment button group"
      >
        <Button>b1</Button>
        <Button>b2</Button>
        <Button>b3</Button>
      </ButtonGroup>
    </div>
  );
};

export default MuiButton;
