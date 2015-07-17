import {argv} from 'yargs'

const defaults = {
    mumblePort: 64738,
    baseUrl: process.env.MURMUR_API_BASE_URL || 'localhost',
    port: process.env.MURMUR_API_PORT || 4321
}

const constants = Object.assign(defaults, argv)

export default constants