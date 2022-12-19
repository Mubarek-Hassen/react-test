import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LongMenu from './LongMenu'
import { Avatar, Badge, SvgIcon } from '@mui/material';
import { PowerSettingsNew, PlaylistAddCheck, Devices, AccountCircle, Drafts, ArrowDropDown } from '@mui/icons-material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{backgroundColor: 'rgb(21,50,76)', p: 1}}>
        <Box sx={{mx: 2, mt: 4,}}>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJojmgN3Kp5hJzjFARWAuiecsmHNzefg4rQ&usqp=CAU" alt="cat" sx={{ width: 66, height: 66 }} />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'end', mx: 2, mb: 1,}}>
      <Box>
      <p id='insideName'>Janet Perkins</p>
      <p id='insideLocation'>Charleston, SC</p>
      </Box>
      <ArrowDropDown />
      </Box>
      </Box>
      <Divider />
      <List>
        {['Account Settings', 'Paired Devices', 'Invites'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{  }}  >
              <ListItemIcon>
                {index === 0 && <AccountCircle />}
                {index === 1 && <Devices />}
                {index === 2 && <Drafts />}
              </ListItemIcon>
              <ListItemText primary={text} />
              {index === 2 && <Badge badgeContent={2} color='primary' anchorOrigin={{horizontal: 'left', vertical: 'top'}} sx={{mx: 2}} ></Badge> }
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Divider />
        {['Triggers'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <SvgIcon> <PlaylistAddCheck/> </SvgIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SvgIcon> <PowerSettingsNew/> </SvgIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ backgroundColor: 'rgb(21,50,76)', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
          </Typography>

          <LongMenu />



        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
