// Copyright (C) <2020> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

'use strict';

/**
 * @class TransportType
 * @memberOf Infraframe.Base
 * @classDesc Transport type enumeration.
 * @hideconstructor
 */
export const TransportType = {
  QUIC: 'quic',
  WEBRTC: 'webrtc',
};

/**
 * @class TransportConstraints
 * @memberOf Infraframe.Base
 * @classDesc Represents the transport constraints for publication and
 * subscription.
 * @hideconstructor
 */
export class TransportConstraints {
  // eslint-disable-next-line require-jsdoc
  constructor(type, id) {
    /**
     * @member {Array.<Infraframe.Base.TransportType>} type
     * @instance
     * @memberof Infraframe.Base.TransportConstraints
     * @desc Transport type for publication and subscription.
     */
    this.type = type;
    /**
     * @member {?string} id
     * @instance
     * @memberof Infraframe.Base.TransportConstraints
     * @desc Transport ID. Undefined transport ID results server to assign a new
     * one. It should always be undefined if transport type is webrtc since the
     * webrtc agent of INFRAFRAME server doesn't support multiple transceivers on a
     * single PeerConnection.
     */
    this.id = id;
  }
}

/**
 * @class TransportSettings
 * @memberOf Infraframe.Base
 * @classDesc Represents the transport settings for publication and
 * subscription.
 * @hideconstructor
 */
export class TransportSettings {
  // eslint-disable-next-line require-jsdoc
  constructor(type, id) {
    /**
     * @member {Infraframe.Base.TransportType} type
     * @instance
     * @memberof Infraframe.Base.TransportSettings
     * @desc Transport type for publication and subscription.
     */
    this.type = type;
    /**
     * @member {string} id
     * @instance
     * @memberof Infraframe.Base.TransportSettings
     * @desc Transport ID.
     */
    this.id = id;

    /**
     * @member {?Array.<RTCRtpTransceiver>} rtpTransceivers
     * @instance
     * @memberof Infraframe.Base.TransportSettings
     * @desc A list of RTCRtpTransceiver associated with the publication or
     * subscription. It's only available in conference mode when TransportType
     * is webrtc.
     * @see {@link https://w3c.github.io/webrtc-pc/#rtcrtptransceiver-interface|RTCRtpTransceiver Interface of WebRTC 1.0}.
     */
    this.rtpTransceivers = undefined;
  }
}
