import { withStyles } from 'app/theme';

export const styled = withStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todo: {
        ...theme.fonts.normal,
        textAlign: 'center',
        marginBottom: 5
    },
    done: {
        ...theme.fonts.normal,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    button: {
        textAlign: 'center',
        width: theme.device.width,
        padding: theme.normalize(20),
        color: theme.colors.white,
        backgroundColor: theme.colors.gray02
    }
}));
