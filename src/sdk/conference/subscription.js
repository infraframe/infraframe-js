// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

'use strict';

import {EventDispatcher} from '../base/event.js';

/**
 * @class AudioSubscriptionCapabilities
 * @memberOf Infraframe.Conference
 * @classDesc Represents the audio capability for subscription.
 * @hideconstructor
 */
export class AudioSubscriptionCapabilities {
  // eslint-disable-next-line require-jsdoc
  constructor(codecs) {
    /**
     * @member {Array.<Infraframe.Base.AudioCodecParameters>} codecs
     * @instance
     * @memberof Infraframe.Conference.AudioSubscriptionCapabilities
     */
    this.codecs = codecs;
  }
}

/**
 * @class VideoSubscriptionCapabilities
 * @memberOf Infraframe.Conference
 * @classDesc Represents the video capability for subscription.
 * @hideconstructor
 */
export class VideoSubscriptionCapabilities {
  // eslint-disable-next-line require-jsdoc
  constructor(
      codecs,
      resolutions,
      frameRates,
      bitrateMultipliers,
      keyFrameIntervals,
  ) {
    /**
     * @member {Array.<Infraframe.Base.VideoCodecParameters>} codecs
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionCapabilities
     */
    this.codecs = codecs;
    /**
     * @member {Array.<Infraframe.Base.Resolution>} resolutions
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionCapabilities
     */
    this.resolutions = resolutions;
    /**
     * @member {Array.<number>} frameRates
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionCapabilities
     */
    this.frameRates = frameRates;
    /**
     * @member {Array.<number>} bitrateMultipliers
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionCapabilities
     */
    this.bitrateMultipliers = bitrateMultipliers;
    /**
     * @member {Array.<number>} keyFrameIntervals
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionCapabilities
     */
    this.keyFrameIntervals = keyFrameIntervals;
  }
}

/**
 * @class SubscriptionCapabilities
 * @memberOf Infraframe.Conference
 * @classDesc Represents the capability for subscription.
 * @hideconstructor
 */
export class SubscriptionCapabilities {
  // eslint-disable-next-line require-jsdoc
  constructor(audio, video) {
    /**
     * @member {?Infraframe.Conference.AudioSubscriptionCapabilities} audio
     * @instance
     * @memberof Infraframe.Conference.SubscriptionCapabilities
     */
    this.audio = audio;
    /**
     * @member {?Infraframe.Conference.VideoSubscriptionCapabilities} video
     * @instance
     * @memberof Infraframe.Conference.SubscriptionCapabilities
     */
    this.video = video;
  }
}

/**
 * @class AudioSubscriptionConstraints
 * @memberOf Infraframe.Conference
 * @classDesc Represents the audio constraints for subscription.
 * @hideconstructor
 */
export class AudioSubscriptionConstraints {
  // eslint-disable-next-line require-jsdoc
  constructor(codecs) {
    /**
     * @member {?Array.<Infraframe.Base.AudioCodecParameters>} codecs
     * @instance
     * @memberof Infraframe.Conference.AudioSubscriptionConstraints
     * @desc Codecs accepted. If none of `codecs` supported by both sides, connection fails. Leave it undefined will use all possible codecs.
     */
    this.codecs = codecs;
  }
}

/**
 * @class VideoSubscriptionConstraints
 * @memberOf Infraframe.Conference
 * @classDesc Represents the video constraints for subscription.
 * @hideconstructor
 */
export class VideoSubscriptionConstraints {
  // eslint-disable-next-line require-jsdoc
  constructor(
      codecs,
      resolution,
      frameRate,
      bitrateMultiplier,
      keyFrameInterval,
      rid,
  ) {
    /**
     * @member {?Array.<Infraframe.Base.VideoCodecParameters>} codecs
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Codecs accepted. If none of `codecs` supported by both sides, connection fails. Leave it undefined will use all possible codecs.
     */
    this.codecs = codecs;
    /**
     * @member {?Infraframe.Base.Resolution} resolution
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Only resolutions listed in Infraframe.Conference.VideoSubscriptionCapabilities are allowed.
     */
    this.resolution = resolution;
    /**
     * @member {?number} frameRate
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Only frameRates listed in Infraframe.Conference.VideoSubscriptionCapabilities are allowed.
     */
    this.frameRate = frameRate;
    /**
     * @member {?number} bitrateMultiplier
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Only bitrateMultipliers listed in Infraframe.Conference.VideoSubscriptionCapabilities are allowed.
     */
    this.bitrateMultiplier = bitrateMultiplier;
    /**
     * @member {?number} keyFrameInterval
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Only keyFrameIntervals listed in Infraframe.Conference.VideoSubscriptionCapabilities are allowed.
     */
    this.keyFrameInterval = keyFrameInterval;
    /**
     * @member {?number} rid
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionConstraints
     * @desc Restriction identifier to identify the RTP Streams within an RTP session. When rid is specified, other constraints will be ignored.
     */
    this.rid = rid;
  }
}

/**
 * @class SubscribeOptions
 * @memberOf Infraframe.Conference
 * @classDesc SubscribeOptions defines options for subscribing a Infraframe.Base.RemoteStream.
 */
export class SubscribeOptions {
  // eslint-disable-next-line require-jsdoc
  constructor(audio, video, transport) {
    /**
     * @member {?Infraframe.Conference.AudioSubscriptionConstraints} audio
     * @instance
     * @memberof Infraframe.Conference.SubscribeOptions
     */
    this.audio = audio;
    /**
     * @member {?Infraframe.Conference.VideoSubscriptionConstraints} video
     * @instance
     * @memberof Infraframe.Conference.SubscribeOptions
     */
    this.video = video;
    /**
     * @member {?Infraframe.Base.TransportConstraints} transport
     * @instance
     * @memberof Infraframe.Conference.SubscribeOptions
     */
    this.transport = transport;
  }
}

/**
 * @class VideoSubscriptionUpdateOptions
 * @memberOf Infraframe.Conference
 * @classDesc VideoSubscriptionUpdateOptions defines options for updating a subscription's video part.
 * @hideconstructor
 */
export class VideoSubscriptionUpdateOptions {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    /**
     * @member {?Infraframe.Base.Resolution} resolution
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionUpdateOptions
     * @desc Only resolutions listed in VideoSubscriptionCapabilities are allowed.
     */
    this.resolution = undefined;
    /**
     * @member {?number} frameRates
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionUpdateOptions
     * @desc Only frameRates listed in VideoSubscriptionCapabilities are allowed.
     */
    this.frameRate = undefined;
    /**
     * @member {?number} bitrateMultipliers
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionUpdateOptions
     * @desc Only bitrateMultipliers listed in VideoSubscriptionCapabilities are allowed.
     */
    this.bitrateMultipliers = undefined;
    /**
     * @member {?number} keyFrameIntervals
     * @instance
     * @memberof Infraframe.Conference.VideoSubscriptionUpdateOptions
     * @desc Only keyFrameIntervals listed in VideoSubscriptionCapabilities are allowed.
     */
    this.keyFrameInterval = undefined;
  }
}

/**
 * @class SubscriptionUpdateOptions
 * @memberOf Infraframe.Conference
 * @classDesc SubscriptionUpdateOptions defines options for updating a subscription.
 * @hideconstructor
 */
export class SubscriptionUpdateOptions {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    /**
     * @member {?VideoSubscriptionUpdateOptions} video
     * @instance
     * @memberof Infraframe.Conference.SubscriptionUpdateOptions
     */
    this.video = undefined;
  }
}

/**
 * @class Subscription
 * @memberof Infraframe.Conference
 * @classDesc Subscription is a receiver for receiving a stream.
 * Events:
 *
 * | Event Name      | Argument Type    | Fired when       |
 * | ----------------| ---------------- | ---------------- |
 * | ended           | Event            | Subscription is ended. |
 * | error           | ErrorEvent       | An error occurred on the subscription. |
 * | mute            | MuteEvent        | Publication is muted. Remote side stopped sending audio and/or video data. |
 * | unmute          | MuteEvent        | Publication is unmuted. Remote side continued sending audio and/or video data. |
 *
 * @extends Infraframe.Base.EventDispatcher
 * @hideconstructor
 */
export class Subscription extends EventDispatcher {
  // eslint-disable-next-line require-jsdoc
  constructor(
      id,
      stream,
      transport,
      stop,
      getStats,
      mute,
      unmute,
      applyOptions,
  ) {
    super();
    if (!id) {
      throw new TypeError('ID cannot be null or undefined.');
    }
    /**
     * @member {string} id
     * @instance
     * @memberof Infraframe.Conference.Subscription
     */
    Object.defineProperty(this, 'id', {
      configurable: false,
      writable: false,
      value: id,
    });
    /**
     * @member {MediaStream | BidirectionalStream} stream
     * @instance
     * @memberof Infraframe.Conference.Subscription
     */
    Object.defineProperty(this, 'stream', {
      configurable: false,
      // TODO: It should be a readonly property, but current implementation
      // creates Subscription after receiving 'ready' from server. At this time,
      // MediaStream may not be available.
      writable: true,
      value: stream,
    });
    /**
     * @member {Infraframe.Base.TransportSettings} transport
     * @instance
     * @readonly
     * @desc Transport settings for the subscription.
     * @memberof Infraframe.Base.Subscription
     */
    Object.defineProperty(this, 'transport', {
      configurable: false,
      writable: false,
      value: transport,
    });
    /**
     * @function stop
     * @instance
     * @desc Stop certain subscription. Once a subscription is stopped, it cannot be recovered.
     * @memberof Infraframe.Conference.Subscription
     * @returns {undefined}
     */
    this.stop = stop;
    /**
     * @function getStats
     * @instance
     * @desc Get stats of underlying PeerConnection.
     * @memberof Infraframe.Conference.Subscription
     * @returns {Promise<RTCStatsReport, Error>}
     */
    this.getStats = getStats;
    /**
     * @function mute
     * @instance
     * @desc Stop reeving data from remote endpoint.
     * @memberof Infraframe.Conference.Subscription
     * @param {Infraframe.Base.TrackKind } kind Kind of tracks to be muted.
     * @returns {Promise<undefined, Error>}
     */
    this.mute = mute;
    /**
     * @function unmute
     * @instance
     * @desc Continue reeving data from remote endpoint.
     * @memberof Infraframe.Conference.Subscription
     * @param {Infraframe.Base.TrackKind } kind Kind of tracks to be unmuted.
     * @returns {Promise<undefined, Error>}
     */
    this.unmute = unmute;
    /**
     * @function applyOptions
     * @instance
     * @desc Update subscription with given options.
     * @memberof Infraframe.Conference.Subscription
     * @param {Infraframe.Conference.SubscriptionUpdateOptions } options Subscription update options.
     * @returns {Promise<undefined, Error>}
     */
    this.applyOptions = applyOptions;

    // Track is not defined in server protocol. So these IDs are equal to their
    // stream's ID at this time.
    this._audioTrackId = undefined;
    this._videoTrackId = undefined;
  }
}
