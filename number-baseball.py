number_list = []

for bag in range(1, 10):
    for sib in range(1, 10):
        for il in range(1, 10):
            if bag != sib and sib != il and il != bag:
                number_list.append(str(bag) + str(sib) + str(il))


def answer_list(answers):
    return list(filter(lambda x: check_list(x, answers), number_list))


def check_list(number, answers):
    for answer in answers:
        if not check(number, answer):
            return False
    return True


def check(number, answer_str):
    a_n, a_s, a_b = split_numbers(answer_str)
    r_s, r_b = 0, 0
    for i, s in enumerate(number):
        if s in a_n:
            r_b += 1
        if number[i] == answer_str[i]:
            r_b -= 1
            r_s += 1
    return (str(r_s), str(r_b)) == (a_s, a_b)


def split_numbers(answer_str):
    return tuple(answer_str.split())

num_of_command = int(input())
command_list = []
for i in range(num_of_command):
    command_list.append(input())

print(len(answer_list(command_list)))




def test_answer_list():
    answers = []
    answers.append('123 1 1')
    # cats: [{1, 1}, {2, 2}, {3, 3}]
    answers.append('356 1 0')
    # alive: [{3, 1}]
    # cats: [{1, 1}, {2, 2}, {3, 3}]

    # dead: [5,6]
    answers.append('327 2 0')
    # alive: [{3, 1}]

    answers.append('489 0 1')
    final_answers = answer_list(answers)
    print(final_answers)
    assert ['324', '328'] == final_answers


def test_check():
    assert check('123', '123 3 0')
    assert check('234', '123 0 2')
    assert check('345', '123 0 1')
    assert check('456', '123 0 0')
    assert check('243', '123 1 1')
    assert check('243', '123 1 0') is False
    assert check('243', '123 2 0') is False
    assert check('789', '123 1 0') is False


def split_numbers_test():
    assert ('123', '0', '0') == split_numbers('123 0 0')


test_check()
test_answer_list()