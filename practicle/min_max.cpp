#include <iostream>
#include <vector>
#include <omp.h>

using namespace std;

int main() {
    vector<int> data = {1, 2, 3, 4, 5, 6};

    int max_val = data[0];
    int min_val = data[0];
    int sum = 0;

    // Parallel reduction to compute max
    #pragma omp parallel for reduction(max:max_val)
    for (int i = 0; i < data.size(); i++) {
        if (data[i] > max_val) {
            max_val = data[i];
        }
    }

    // Parallel reduction to compute min
    #pragma omp parallel for reduction(min:min_val)
    for (int i = 0; i < data.size(); i++) {
        if (data[i] < min_val) {
            min_val = data[i];
        }
    }

    // Parallel reduction to compute sum
    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < data.size(); i++) {
        sum += data[i];
    }

    float avg = static_cast<float>(sum) / data.size();

    // Displaying results
    cout << "Sum: " << sum << endl;
    cout << "Max: " << max_val << endl;
    cout << "Min: " << min_val << endl;
    cout << "Avg: " << avg << endl;

    return 0;
}


// g++ -fopenmp <file_name>.cpp -o <file_name>.exe
//<file_name>.exe