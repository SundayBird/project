num_of_command = int(input())



def test():
    answer_list = []
    answer_list.append('123 1 1')
    answer_list.append('356 1 0')
    answer_list.append('327 2 0')
    answer_list.append('489 0 1')
    assert 2 == answer(answer_list)