#include <iostream>
#include <vector>
#include <omp.h>
using namespace std;

void merge(vector<int>& arr, int low, int mid, int high) {
    vector<int> temp;
    int left = low, right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left++]);
        } else {
            temp.push_back(arr[right++]);
        }
    }

    while (left <= mid)
        temp.push_back(arr[left++]);
    while (right <= high)
        temp.push_back(arr[right++]);

    for (int i = low; i <= high; ++i) {
        arr[i] = temp[i - low];
    }
}

void parallel_merge_sort(vector<int>& arr, int low, int high) {
    if (low >= high)
        return;

    int mid = (low + high) / 2;

    #pragma omp parallel sections
    {
        #pragma omp section
        parallel_merge_sort(arr, low, mid);

        #pragma omp section
        parallel_merge_sort(arr, mid + 1, high);
    }

    merge(arr, low, mid, high);
}

int main() {
    vector<int> arr = {1, 23, 43, 3, 14, 1};

    // Start the parallel region
    #pragma omp parallel
    {
        #pragma omp single
        {
            parallel_merge_sort(arr, 0, arr.size() - 1);
        }
    }

    for (int val : arr) {
        cout << val << " ";
    }

    cout << "\n";
    return 0;
}


//g++ -fopenmp <filename>.cpp -o <filename>.exe
//filename.exe