// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import module from 'chrome/nav/module';

describe('Nav service', () => {
  /** @type {!chrome/nav/nav_service.NavService} */
  let navService;

  beforeEach(() => angular.mock.module(module.name));

  beforeEach(angular.mock.inject((kdNavService) => { navService = kdNavService; }));

  it('should deny toggle when not initialized', () => {
    expect(() => {
      navService.toggle();
    }).toThrow(new Error('Navigation menu is not registered. This is likely a programming error.'));
  });

  it('toggle nav', () => {
    let comp = jasmine.createSpy('comp');
    navService.registerNav({toggle: comp});
    navService.toggle();

    expect(comp).toHaveBeenCalled();
  });
});