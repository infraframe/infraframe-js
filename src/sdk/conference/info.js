// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

'use strict';

/**
 * @class ConferenceInfo
 * @classDesc Information for a conference.
 * @memberOf Infraframe.Conference
 * @hideconstructor
 */
export class ConferenceInfo {
  // eslint-disable-next-line require-jsdoc
  constructor(id, participants, remoteStreams, myInfo) {
    /**
     * @member {string} id
     * @instance
     * @memberof Infraframe.Conference.ConferenceInfo
     * @desc Conference ID.
     */
    this.id = id;
    /**
     * @member {Array<Infraframe.Conference.Participant>} participants
     * @instance
     * @memberof Infraframe.Conference.ConferenceInfo
     * @desc Participants in the conference.
     */
    this.participants = participants;
    /**
     * @member {Array<Infraframe.Base.RemoteStream>} remoteStreams
     * @instance
     * @memberof Infraframe.Conference.ConferenceInfo
     * @desc Streams published by participants. It also includes streams published by current user.
     */
    this.remoteStreams = remoteStreams;
    /**
     * @member {Infraframe.Base.Participant} self
     * @instance
     * @memberof Infraframe.Conference.ConferenceInfo
     */
    this.self = myInfo;
  }
}
