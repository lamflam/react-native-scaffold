import { withStyles } from 'app/theme';

export const styled = withStyles(({ fonts }) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        ...fonts.bold,
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        ...fonts.normal,
        textAlign: 'center',
        marginBottom: 5
    }
}));
