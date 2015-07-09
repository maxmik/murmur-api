import {Ice} from 'ice'
import {Murmur} from './murmur'

const encodingVersion = '1.0'
const id = new Ice.InitializationData();
id.properties = Ice.createProperties();
id.properties.setProperty("Ice.Default.EncodingVersion", encodingVersion)

const communicator = Ice.initialize(id);
const proxy = communicator.stringToProxy("Meta:tcp -h 127.0.0.1 -p 6502")

const meta = Murmur.MetaPrx.checkedCast(proxy)
 
export default meta