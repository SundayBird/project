//
//  Possibility.swift
//  TDDNumberBaseball
//
//  Created by WonyoungJu on 26/01/2019.
//  Copyright © 2019 getogrand. All rights reserved.
//

import Foundation

struct Possibility {
    let answer: String
    
    static func list(from judgements: [Judgement]) -> [Possibility] {
        var wholePossibilities: [Possibility] {
            return (111...999).map { (num) -> Possibility in
                return Possibility(answer: "\(num)")
            }
        }

        return wholePossibilities.filter { (possibility) -> Bool in
            for judgement in judgements {
                if !possibility.isMatched(with: judgement) {
                    return false
                }
            }
            return true
        }
    }

    func isMatched(with judgement: Judgement) -> Bool {
        var strikeCount = 0
        var ballCount = 0

        let answer = self.answer
        let guess = judgement.guess

        for i in answer.indices {
            for j in guess.indices {
                if i == j && answer[i] == guess[j] {
                    strikeCount += 1
                }
                if i != j && answer[i] == guess[j] {
                    ballCount += 1
                }
            }
        }

        return judgement.strikeCount == strikeCount && judgement.ballCount == ballCount
    }
}
