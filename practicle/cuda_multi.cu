#include <iostream>
#include <cuda_runtime.h>

#define N 2  // Very small matrix for simplicity

__global__ void matrixMul(int *A, int *B, int *C, int width) {
    int row = threadIdx.y;
    int col = threadIdx.x;
    int sum = 0;

    for (int i = 0; i < width; i++)
        sum += A[row * width + i] * B[i * width + col];

    C[row * width + col] = sum;
}

int main() {
    int size = N * N * sizeof(int);
    int h_A[N*N] = {1, 2, 3, 4};
    int h_B[N*N] = {5, 6, 7, 8};
    int h_C[N*N];

    int *d_A, *d_B, *d_C;
    cudaMalloc(&d_A, size); cudaMalloc(&d_B, size); cudaMalloc(&d_C, size);

    cudaMemcpy(d_A, h_A, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_B, h_B, size, cudaMemcpyHostToDevice);

    dim3 threadsPerBlock(N, N);
    matrixMul<<<1, threadsPerBlock>>>(d_A, d_B, d_C, N);

    cudaMemcpy(h_C, d_C, size, cudaMemcpyDeviceToHost);

    std::cout << "Resultant Matrix C:" << std::endl;
    for (int i = 0; i < N*N; i++) {
        std::cout << h_C[i] << " ";
        if ((i + 1) % N == 0) std::cout << std::endl;
    }

    cudaFree(d_A); cudaFree(d_B); cudaFree(d_C);
    return 0;
}

// nvcc vector_add.cu -o vector_add
// ./vector_add