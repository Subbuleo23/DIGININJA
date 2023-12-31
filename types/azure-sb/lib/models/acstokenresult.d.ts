//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Azure as Az } from "azure-sb";
import Dictionary = Az.ServiceBus.Dictionary;

export namespace Azure.ServiceBus.Results {
    export interface AcsTokenResponse extends Dictionary<string | Dictionary<string>> {
        WrapAccessToken: Dictionary<string>;
        WrapAccessTokenExpiresIn: Dictionary<string>;
    }

    export interface AcsTokenResult {
        parse(acsTokenQueryString: string): AcsTokenResponse;
    }
}
