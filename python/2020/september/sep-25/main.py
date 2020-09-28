import networkx as nx

# * Daily Coding Problem September 25th 2020


def main():
    flights = [('JFK', 'ATL', 150),
               ('ATL', 'SFO', 400),
               ('ORD', 'LAX', 200),
               ('LAX', 'DFW',  80),
               ('JFK', 'HKG', 800),
               ('ATL', 'ORD',  90),
               ('JFK', 'LAX', 500), ]
    graph = nx.DiGraph()
    graph.add_weighted_edges_from(flights)

    for n, nbrs in graph.adj.items():
        for nbr, eattr in nbrs.items():
            wt = eattr['weight']
            print(f"{n} --({wt})--> {nbr}")

    print(nx.dijkstra_path(graph, 'JFK', 'LAX'))


main()

# _____________________TESTS_____________________________
