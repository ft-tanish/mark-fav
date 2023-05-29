import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';

export default function ProfileCard() {
    const { state } = useLocation()
    const post = state?.post?.post

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: 5, width: "50%" }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Name: {post?.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Birth Year: {post?.birth_year}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Gender: {post?.gender}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mass: {post?.mass}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Height: {post?.height}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Skin Color: {post?.skin_color}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Eye Color: {post?.eye_color}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Hair Color: {post?.hair_color}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "50%" }}
                src="https://picsum.photos/350"
                alt="profile-image"
            />
        </Card >
    );
}
