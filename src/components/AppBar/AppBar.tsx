import {
  Toolbar,
  IconButton,
  Typography,
  AppBar as AppBarComponent,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC } from 'react';

export const AppBar: FC = () => (
  <AppBarComponent position="static">
    <Toolbar>
      <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h6" flexGrow={1}>
        Створення персони
      </Typography>
    </Toolbar>
  </AppBarComponent>
);
