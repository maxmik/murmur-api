import {argv} from 'yargs'

const defaults = {
    baseUrl: 'localhost',
    port: 64738
}

const constants = Object.assign(defaults, argv)

export default constants