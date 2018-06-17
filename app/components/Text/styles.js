import { withStyles } from 'app/theme';

export const styled = withStyles(theme => ({
    text: {
        ...theme.fonts.normal
    },
    bold: {
        ...theme.fonts.bold
    }
}));
