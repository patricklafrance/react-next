const path = require("path");
const { ESLINT_MODES } = require("@craco/craco");

const APP_RELATIVE_PATH = "src/app/";

module.exports = {
    eslint: {
        mode: ESLINT_MODES.file
    },
    webpack: {
        alias: {
            "@shared": path.resolve(__dirname, "src/shared/"),
            "@api": path.resolve(__dirname, "src/api/"),
            "@app": path.resolve(__dirname, APP_RELATIVE_PATH),
            "@core": path.resolve(__dirname, `${APP_RELATIVE_PATH}core/`),
            "@components": path.resolve(__dirname, `${APP_RELATIVE_PATH}components/`),
            "@features": path.resolve(__dirname, `${APP_RELATIVE_PATH}features/`),
            "@events": path.resolve(__dirname, `${APP_RELATIVE_PATH}/events/`)
        }
    },
    babel: {
        plugins: [
            "babel-plugin-jsx-control-statements",
            "babel-plugin-react-require"
        ]
    }
};
