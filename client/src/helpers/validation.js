const validationSchema = {
    title: {
        required: true,
        validator: {
            min: 2,
            error: 'Film title minimum length 2',
        }
    },
    release_year: {
        required: true,
        validator: {
            regEx: /^[0-9]+$/,
            length: 4,
            error: 'Release year in range 1850 to 2020',
        }
    },
    format: {
        required: true,
        validator: {
            error: 'Film format is required!',
        }
    },
    stars: {
        required: true,
        validator: {
            min: 5,
            error: 'Stars not empty',
        }
    }
}

export const validation = () => {
    switch (key) {
        case 'release_year': {
            if (value < 1850 || value > 2020) {
                return
            }
        }
        default:
            break
    }
}