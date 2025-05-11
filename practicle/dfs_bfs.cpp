#include <iostream>
#include <vector>
#include <queue>
#include <omp.h>

using namespace std;

const int N = 6;
vector<vector<int>> graph(N);
vector<bool> visited_dfs(N, false);
vector<bool> visited_bfs(N, false);

// Parallel DFS
void dfs(int node) {
    visited_dfs[node] = true;

    cout << "DFS visited: " << node << endl;

    #pragma omp parallel for
    for (int i = 0; i < graph[node].size(); i++) {
        int child = graph[node][i];
        if (!visited_dfs[child]) {
            dfs(child); 
        }
    }
}

// Parallel BFS
void bfs(int start) {
    int n = graph.size();
    vector<bool> visited(n, false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    cout << "Parallel BFS: ";

    while (!q.empty()) {
        int qsize = q.size();
        
        #pragma omp parallel for
        for (int i = 0; i < qsize; i++) {
            int node;

            #pragma omp critical
            {
                node = q.front();
                q.pop();
                cout << node << " ";
            }

            for (int neighbor : graph[node]) {
                #pragma omp critical
                {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        q.push(neighbor);
                    }
                }
            }
        }
    }
    cout << endl;
}

int main() {
    // Create an undirected graph (tree-like structure)
    graph[0] = {1, 2};
    graph[1] = {0, 3, 4};
    graph[2] = {0, 5};
    graph[3] = {1};
    graph[4] = {1};
    graph[5] = {2};

    cout << "Parallel DFS starting from node 0:\n";
    dfs(0);

    cout << "\nParallel BFS starting from node 0:\n";
    bfs(0);

    return 0;
}


// g++ -fopenmp filename.cpp -o filename.exe
//filename.exe