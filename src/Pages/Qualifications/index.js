import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scits" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDzitOSKW1D9M5iPfIt-TUX2H-hfO6KjjSFd6QLlBbEOC-mZeqUNYIO5CaGGFlbMky7k&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological sciences "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                65% CGPA
              </Typography>
              {" — B.Tech"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Alphores" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLyfD9G1xdrwlUxVmcDYxPKoHgMv1VmOGYaLuPkXFG1T-pdjW6rsl23Ia6BMMc7lauWs&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Alphores Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                84% CGPA
              </Typography>
              {" — Intermediate studies "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="laurel "src="https://comps.gograph.com/kid-girl-australia-school-uniform-illustration_gg111294021.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="The Laurel High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                93% CGPA
              </Typography>
              {' — Higher Secondory Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}