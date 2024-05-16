// Copyright (C) <2018> Intel Corporation
// Copyright (C) <2024> InfraFrame team
//
// SPDX-License-Identifier: Apache-2.0

'use strict';

import * as base from './base/export.js';
import * as p2p from './p2p/export.js';
import * as conference from './conference/export.js';

const InfraFrame = {
  Base: base,
  P2P: p2p,
  Conference: conference,
};

export default InfraFrame;
