// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

'use strict';

/**
 * @class AudioCodec
 * @memberOf Infraframe.Base
 * @classDesc Audio codec enumeration.
 * @hideconstructor
 */
export const AudioCodec = {
  PCMU: 'pcmu',
  PCMA: 'pcma',
  OPUS: 'opus',
  G722: 'g722',
  ISAC: 'iSAC',
  ILBC: 'iLBC',
  AAC: 'aac',
  AC3: 'ac3',
  NELLYMOSER: 'nellymoser',
};
/**
 * @class AudioCodecParameters
 * @memberOf Infraframe.Base
 * @classDesc Codec parameters for an audio track.
 * @hideconstructor
 */
export class AudioCodecParameters {
  // eslint-disable-next-line require-jsdoc
  constructor(name, channelCount, clockRate) {
    /**
     * @member {string} name
     * @memberof Infraframe.Base.AudioCodecParameters
     * @instance
     * @desc Name of a codec. Please a value in Infraframe.Base.AudioCodec. However,
     * some functions do not support all the values in Infraframe.Base.AudioCodec.
     */
    this.name = name;
    /**
     * @member {?number} channelCount
     * @memberof Infraframe.Base.AudioCodecParameters
     * @instance
     * @desc Numbers of channels for an audio track.
     */
    this.channelCount = channelCount;
    /**
     * @member {?number} clockRate
     * @memberof Infraframe.Base.AudioCodecParameters
     * @instance
     * @desc The codec clock rate expressed in Hertz.
     */
    this.clockRate = clockRate;
  }
}

/**
 * @class AudioEncodingParameters
 * @memberOf Infraframe.Base
 * @classDesc Encoding parameters for sending an audio track.
 * @hideconstructor
 */
export class AudioEncodingParameters {
  // eslint-disable-next-line require-jsdoc
  constructor(codec, maxBitrate) {
    /**
     * @member {?Infraframe.Base.AudioCodecParameters} codec
     * @instance
     * @memberof Infraframe.Base.AudioEncodingParameters
     */
    this.codec = codec;
    /**
     * @member {?number} maxBitrate
     * @instance
     * @memberof Infraframe.Base.AudioEncodingParameters
     * @desc Max bitrate expressed in kbps.
     */
    this.maxBitrate = maxBitrate;
  }
}

/**
 * @class VideoCodec
 * @memberOf Infraframe.Base
 * @classDesc Video codec enumeration.
 * @hideconstructor
 */
export const VideoCodec = {
  VP8: 'vp8',
  VP9: 'vp9',
  H264: 'h264',
  H265: 'h265',
  AV1: 'av1',
  // Non-standard AV1, will be renamed to AV1.
  // https://bugs.chromium.org/p/webrtc/issues/detail?id=11042
  AV1X: 'av1x',
};

/**
 * @class VideoCodecParameters
 * @memberOf Infraframe.Base
 * @classDesc Codec parameters for a video track.
 * @hideconstructor
 */
export class VideoCodecParameters {
  // eslint-disable-next-line require-jsdoc
  constructor(name, profile) {
    /**
     * @member {string} name
     * @memberof Infraframe.Base.VideoCodecParameters
     * @instance
     * @desc Name of a codec.Please a value in Infraframe.Base.AudioCodec.However,
       some functions do not support all the values in Infraframe.Base.AudioCodec.
     */
    this.name = name;
    /**
     * @member {?string} profile
     * @memberof Infraframe.Base.VideoCodecParameters
     * @instance
     * @desc The profile of a codec. Profile may not apply to all codecs.
     */
    this.profile = profile;
  }
}

/**
 * @class VideoEncodingParameters
 * @memberOf Infraframe.Base
 * @classDesc Encoding parameters for sending a video track.
 * @hideconstructor
 */
export class VideoEncodingParameters {
  // eslint-disable-next-line require-jsdoc
  constructor(codec, maxBitrate) {
    /**
     * @member {?Infraframe.Base.VideoCodecParameters} codec
     * @instance
     * @memberof Infraframe.Base.VideoEncodingParameters
     */
    this.codec = codec;
    /**
     * @member {?number} maxBitrate
     * @instance
     * @memberof Infraframe.Base.VideoEncodingParameters
     * @desc Max bitrate expressed in kbps.
     */
    this.maxBitrate = maxBitrate;
  }
}
