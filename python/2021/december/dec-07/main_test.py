from main import interleavePlaylists


def testInterleavePlaylists():
    playlists = [
        [1, 7, 3], 
        [2, 1, 6, 7, 9], 
        [3, 9, 5]
    ]
    assert interleavePlaylists(playlists) == [2, 1, 6, 7, 3, 9, 5]