//
//  NumberBaseballTest.swift
//  NumberBaseballTest
//
//  Created by WonyoungJu on 12/01/2019.
//  Copyright © 2019 getogrand. All rights reserved.
//

import XCTest
@testable import NumberBaseball

class NumberBaseballTest: XCTestCase {

    override func setUp() {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

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

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
