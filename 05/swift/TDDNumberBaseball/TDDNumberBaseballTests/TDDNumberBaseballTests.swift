//
//  TDDNumberBaseballTests.swift
//  TDDNumberBaseballTests
//
//  Created by WonyoungJu on 26/01/2019.
//  Copyright © 2019 getogrand. All rights reserved.
//

import XCTest
@testable import NumberBaseball

class TDDNumberBaseballTests: XCTestCase {

    func testPossibilityListCase1() {
        let judgements: [Judgement] = [
            Judgement(guess: "123", strikeCount: 1, ballCount: 1),
            Judgement(guess: "356", strikeCount: 1, ballCount: 0),
            Judgement(guess: "327", strikeCount: 2, ballCount: 0),
            Judgement(guess: "489", strikeCount: 0, ballCount: 1),
            ]
        let possibilities = Possibility.list(from: judgements)
        XCTAssertEqual(2, possibilities.count)
    }

}
