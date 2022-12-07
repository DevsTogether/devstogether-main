import Avatar from '@mui/material/Avatar';

export interface HeaderAvatarProps {
    name: string | null | undefined;
    image: string | null | undefined;
}

export default function HeaderAvatar({ name, image }: HeaderAvatarProps) {
    return (
        <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt={name || ''}
            src={
                image ||
                'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
            }
        />
    );
}