const NodeMediaServer = require('node-media-server');

const mediaPort = process.env.NODE_MEDIA_PORT || 3000;
const rtmpPort = process.env.RTMP_PORT;

const config = {
  rtmp: {
    port: rtmpPort,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: mediaPort,
    allow_origin: '*'
  }
};

let nms = new NodeMediaServer(config)

nms.run();