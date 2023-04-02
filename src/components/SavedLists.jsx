import { Box, Typography, List } from '@mui/material';
import { theme } from '../styles/theme';

const SavedLists = ({ lists, setCurrentList }) => {
    return (
        <List>
            {lists.map((elem) =>
                <Typography variant="h2"
                    onClick={() => setCurrentList(elem)}
                    sx={{
                        border: '1px solid black',
                        height: '50px',
                        width: '90%',
                        display: 'flex',
                        alignItems: 'center',
                        'box-shadow': '-15px 11px 25px -1px ',
                        '-webkit-box-shadow': '-15px 11px 25px -1px rgba(0,0,0,0.4)',
                        '-moz-box-shadow': '-15px 11px 25px -1px rgba(0,0,0,0.4)',
                        '&:hover': {
                            backgroundColor: 'secondary.main',
                            cursor: 'pointer',
                            'box-shadow': '-15px 11px 25px -1px rgba(0,0,0,0.5)',
                            '-webkit-box-shadow': '-15px 11px 25px -1px rgba(0,0,0,0.5)',
                            '-moz-box-shadow': '-15px 11px 25px -1px rgba(0,0,0,0.5)',
                        }
                    }}
                    py={1}
                    px={2}
                    my={1}
                >{elem.name}</Typography>
            )}
        </List>

    );
}

export default SavedLists;