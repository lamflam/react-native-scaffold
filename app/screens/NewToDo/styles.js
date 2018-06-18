import { withStyles } from 'app/theme';

export const styled = withStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    todoInput: {
        margin: theme.normalize(10)
    },
    button: {
        textAlign: 'center',
        width: theme.device.width,
        padding: theme.normalize(20),
        color: theme.colors.white,
        backgroundColor: theme.colors.gray02
    }
}));
