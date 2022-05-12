import { Typography, Button, Stack, Paper } from '@mui/material';
import Profile from '../assets/profile.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Info = () => {
    return (
        <div className='info'>
            <img src={Profile} alt='profile' className='profile-photo'/>
            <Typography variant="h4" component="h4">Steve Grant</Typography>
            <Typography variant="body" component="body">Frontend Developer</Typography>
            <Typography variant="body2" component="body2">Steven Website</Typography>
            <div className='buttons'>
                <Button startIcon={<EmailIcon />} variant='contained' size='small'>Email</Button>
                <Button startIcon={<LinkedInIcon />} variant='contained' size='small'>LinkedIn</Button>
            </div>
        </div>
    );
}

export default Info;
