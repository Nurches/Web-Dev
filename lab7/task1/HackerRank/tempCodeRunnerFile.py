stream = items[0]
    a = int(items[1])
    if stream == "odd":
        print_from_stream(a, OddStream())
    else:
        print_from_stream(a)