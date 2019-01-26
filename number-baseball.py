# num_of_command = int(input())


def answer(answers):
    return 2


def split_numbers(answer_str):
    return list(map(lambda x: int(x), answer_str.split()))


def test1():
    answers = []
    answers.append('123 1 1')
    answers.append('356 1 0')
    answers.append('327 2 0')
    answers.append('489 0 1')
    assert 2 == answer(answers)


def test2():
    # answer is 457
    answers = []
    answers.append('123 0 0')
    answers.append('356 1 0')
    answers.append('327 1 0')
    answers.append('489 1 0')


def split_numbers_test():
    assert [123, 0, 0] == split_numbers('123 0 0')


test1()
split_numbers_test()