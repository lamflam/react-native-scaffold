import { withStyles } from 'app/theme';

export const styled = withStyles(theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        ...theme.fonts.bold,
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        ...theme.fonts.normal,
        textAlign: 'center',
        marginBottom: 5
    }
}));
